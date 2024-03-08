using API.Dtos;
using AutoMapper;
using Core.Identity;
using Core.Interfaces;
using Core.Models;
using Core.Specifictions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Stripe;
using System.Security.Claims;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : BaseApiController
    {
        private readonly IReviewService _reviewService;
        private readonly IMapper _mapper;
        private readonly UserManager<AppUser> _userManager;

        public ReviewController(IReviewService reviewService, IMapper mapper, UserManager<AppUser> userManager)
        {
            _reviewService = reviewService;
            _mapper = mapper;
            _userManager = userManager;
        }

        [HttpGet("{productId}")]
        public async Task<ActionResult<IEnumerable<ReviewDto>>> GetReviews(int productId)
        {
            //var reviews = await _reviewService.GetReviewsAsync(productId);
            //return Ok(reviews);

            var reviews = await _reviewService.GetReviewsAsync(productId);
            var reviewDtos = _mapper.Map<IEnumerable<ReviewDto>>(reviews);
            return Ok(reviewDtos);
        }

        [HttpPost]
        [Authorize(Roles = "User")]

        public async Task<ActionResult<ReviewDto>> CreateReview(ReviewDto reviewDto, int productId)
        {
            
            if (User == null)
            {
                return Unauthorized();
            }
            var user = await _userManager.GetUserAsync(User);
            
            //review.UserId = user.Id;
            //var createdReview = await _reviewService.CreateReviewAsync(reviewDto,productid);
            //return Ok(createdReview);
            //string userId = "9a3a8065-9966-4bfe-9262-e5b3a24181ec";
            //string UserName = "Ali Ali";
            var review = _mapper.Map<Core.Models.Review>(reviewDto);
            review.ProductId = productId;
            review.UserId = user.Id;
            review.ReviewerName = user.DisplayName;
            //review.CreatedAt = DateTime.UtcNow;
            //review.UpdatedAt = DateTime.UtcNow;
            var createdReview = await _reviewService.CreateReviewAsync(review, productId);
            var createdReviewDto = _mapper.Map<ReviewDto>(createdReview);
            return Ok(createdReviewDto);
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<ActionResult<ReviewDto>> UpdateReview(int id, ReviewDto reviewDto)
        {
            var review = _mapper.Map<Core.Models.Review>(reviewDto);
            review.Id = id;
            await _reviewService.UpdateReviewAsync(id, review);
            return Ok(reviewDto);
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<ActionResult> DeleteReview(int id)
        {
            await _reviewService.DeleteReviewAsync(id);
            return NoContent();
        }

        //////////////
        /// Reviews with filters

        //public async Task<IReadOnlyList<Review>> GetReviewsWithFilters(ReviewFilterDto filter)
        //{
        //    var spec = new ReviewFilterSpecification(filter);

        //    var reviews = await _context.Reviews
        //        .Include(r => r.Product)
        //        .Where(spec.Criteria)
        //        .ToListAsync();

        //    return reviews.Select(MapReviewToDto).ToList();
        //}

        //public async Task<ReviewDto> CreateReview(ReviewDto reviewDto)
        //{
        //    var review = MapDtoToReview(reviewDto);

        //    _context.Reviews.Add(review);
        //    await _context.SaveChangesAsync();

        //    return MapReviewToDto(review);
        //}

        //private ReviewDto MapReviewToDto(Review review)
        //{
        //    return new ReviewDto
        //    {
        //        Id = review.Id,
        //        ProductId = review.ProductId,
        //        Rating = review.Rating,
        //        Comment = review.Comment,
        //        UserName = review.UserName,
        //        ProductName = review.Product.Name
        //    };
        //}

        //private Review MapDtoToReview(ReviewDto reviewDto)
        //{
        //    return new Review
        //    {
        //        ProductId = reviewDto.ProductId,
        //        Rating = reviewDto.Rating,
        //        Comment = reviewDto.Comment,
        //        UserName = reviewDto.UserName
        //    };
        //}
    }
}
