using API.Dtos;
using API.Errors;
using API.Extensions;
using AutoMapper;
using Core.Identity;
using Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using StackExchange.Redis;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : BaseApiController
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly ITokenService _tokenService;
        private readonly IMapper _mapper;
        public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, ITokenService tokenService, IMapper mapper)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenService = tokenService;
            _mapper = mapper;

        }
        [HttpGet("secret")]
        [Authorize]
        public string getSecret()
        {
            return "secret string";
        }
        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> login(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);
            if (user == null) return Unauthorized(new ApiResponse(401));

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);
            if (!result.Succeeded) return Unauthorized(new ApiResponse(401));

            //var claims = new List<Claim>
            // {
            //     new Claim(ClaimTypes.Name, user.Email),
            //     new Claim(ClaimTypes.Role, "User")
            // };

            //var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]));
            //var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            //var token = new JwtSecurityToken(Configuration["Jwt:Issuer"],
            //    Configuration["Jwt:Audience"],
            //    claims,
            //    expires: DateTime.Now.AddDays(1),
            //    signingCredentials: creds);

            // return new JwtSecurityTokenHandler().WriteToken(token);


            var userRoles = await _userManager.GetRolesAsync(user);
            var role = "";
            if (userRoles.Any())
            {
                foreach (var item in userRoles)
                {
                    if (item == "Admin")
                    {
                        role = "Admin";
                        return new UserDto
                        {
                            Email = user.Email,
                            Token = _tokenService.CreateToken(user),
                            DisplayName = user.DisplayName,
                            Role = role
                        };
                    }
                }
                role = userRoles.FirstOrDefault();
                return new UserDto
                {
                    Email = user.Email,
                    Token = _tokenService.CreateToken(user),
                    DisplayName = user.DisplayName,
                    Role = role
                };
                // Get the first role     var currentRole = roles.First();
            }
            return new UserDto
            {
                Email = user.Email,
                Token = _tokenService.CreateToken(user),
                DisplayName = user.DisplayName,
                Role = role
            };
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            var user = new AppUser
            {
                Email = registerDto.Email,
                DisplayName = registerDto.DisplayName,
                UserName = registerDto.Email,


            };
            var result = await _userManager.CreateAsync(user, registerDto.Password);
            if (!result.Succeeded) return BadRequest(new ApiResponse(400));
            else
            {
                await _userManager.AddToRoleAsync(user, "User");

                return new UserDto
                {
                    Email = user.Email,
                    DisplayName = user.DisplayName,
                    Token = _tokenService.CreateToken(user),
                    Role = "User"

                };
            }
        }
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<UserDto>> GetCurrentUser()
        {

            var user = await _userManager.FindByEmailFromClaimsPrincipal(User);

            if (user == null)
            {
                return BadRequest("User not found");
            }

            return new UserDto
            {
                Email = user.Email,
                Token = _tokenService.CreateToken(user),
                DisplayName = user.DisplayName
            };
            //var user = await _userManager.FindByEmailFromClaimsPrincipal(User);

            //return new UserDto
            //{
            //    Email = user.Email,
            //    Token = _tokenService.CreateToken(user),
            //    DisplayName = user.DisplayName
            //};
        }

        [HttpGet("emailexists")]
        public async Task<ActionResult<bool>> CheckEmailExistsAsync([FromQuery] string email)
        {
            return await _userManager.FindByEmailAsync(email) != null;
        }

        [Authorize]
        [HttpGet("address")]
        public async Task<ActionResult<AddressDto>> GetUserAddress()
        {
            var user = await _userManager.FindByEmailFromClaimsPrincipal(User);


            return _mapper.Map<Address, AddressDto>(user.Address);
        }

        [Authorize]
        [HttpPut("address")]
        public async Task<ActionResult<AddressDto>> UpdateUserAddress(AddressDto address)
        {
            var user = await _userManager.FindUserByClaimsPrincipleWithAddress(User);

            user.Address = _mapper.Map<AddressDto, Address>(address);

            var result = await _userManager.UpdateAsync(user);

            if (result.Succeeded) return Ok(_mapper.Map<AddressDto>(user.Address));

            return BadRequest("Problem updating the user");
        }

        [HttpPost("reset-password")]
        public async Task<ActionResult<Boolean>> ResetPassword(ResetPasswordDto resetPasswordDto)
        {

            var user = await _userManager.FindByEmailAsync(resetPasswordDto.Email);
            if (user == null)
            {
                return BadRequest(new ApiResponse(400, "User not found!"));
            }
            else
            {
                if (resetPasswordDto.Password != resetPasswordDto.ConfirmPassword)
                {
                    return BadRequest(new ApiResponse(400, "Password and Confirm Password doesn't match!"));
                }

                var token = await _userManager.GeneratePasswordResetTokenAsync(user);
                var result = await _userManager.ResetPasswordAsync(user, token, resetPasswordDto.Password);
                if (!result.Succeeded)
                {
                    return BadRequest(new ApiResponse(400, "Something went wrong!"));
                }
                else
                {
                    return Ok(true);
                }
            }

        }
    }
}
