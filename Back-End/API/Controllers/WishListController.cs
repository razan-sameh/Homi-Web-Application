using API.Dtos;
using AutoMapper;
using Core.Interfaces;
using Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WishListController : BaseApiController   //what is the difference between "Controller" and " ControllerBase"?
    {
        private readonly IwishListRepository _wishListRepository;
        private readonly IMapper _mapper;
        public WishListController(IwishListRepository wishListRepository, IMapper mapper)
        {
            _wishListRepository = wishListRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<CustomerWishList>> GetCartById(string id)
        {
            var wishList = await _wishListRepository.GetCartAsync(id); ;
            return Ok(wishList ?? new CustomerWishList(id));
        }

        [HttpPost]
        public async Task<ActionResult<CustomerWishList>> UpdateCart(CustomerWishListDto wishList)
        {
            var customerWishList = _mapper.Map<CustomerWishList>(wishList);
            var updatedWishList = await _wishListRepository.UpdateBasketAsync(customerWishList);
            return Ok(updatedWishList);
        }

        [HttpDelete]
        public async Task DeleteCartAsync(string id)
        {
            await _wishListRepository.DeleteBasketAsync(id);
        }


    }
}
