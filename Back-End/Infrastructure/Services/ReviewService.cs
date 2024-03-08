using Core.Interfaces;
using Core.Models;
using Infrastructure.Data;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Services
{
    public class ReviewService:IReviewService
    {
        private readonly StoreContext _storeContext;
        private readonly IdentityDbContext _identityDbContext;

        public ReviewService(StoreContext storeContext)
        {
            _storeContext = storeContext;
        }

        public async Task<IEnumerable<Review>> GetReviewsAsync(int productId)
        {
            var reviews = await _storeContext.Reviews
                .Where(r => r.ProductId == productId)
                .OrderByDescending(r => r.CreatedAt)
                .ToListAsync();

            return (IEnumerable<Review>)reviews.Select(r => MapReviewToDto(r));
        }

        public async Task<Review> CreateReviewAsync(Review reviewDto, int productId)
        {


            //// Check if the user and product exist
            //var user = await _context.AppUser.FindAsync(userId);
            //var product = await _context.ProductItems.FindAsync(productId);

            //if (user == null || product == null)
            //{
            //    return null;
            //}

            //// Create a new Review object
            //var review = new Review
            //{
            //    UserId = userId,
            //    ProductId = productId,
            //    ReviewerName = user.DisplayName,
            //    Content = reviewDto.Content,
            //    Rating = reviewDto.Rating,
            //    CreatedAt = DateTime.UtcNow,
            //    UpdatedAt = DateTime.UtcNow
            //};

            //// Add the Review object to the Reviews table in the database
            //await _context.Reviews.AddAsync(review);
            //await _context.SaveChangesAsync();

            //return review;

            //////----
            //var review = MapDtoToReview(reviewDto);
            //review.CreatedAt = DateTime.UtcNow;
            //review.UpdatedAt = null;

            //_storeContext.Reviews.Add(review);
            //await _storeContext.SaveChangesAsync();

            //return MapReviewToDto(review);

            // Check if the user and product exist

            var product= await _storeContext.Products.FindAsync(productId);
            //var product = await _storeContext.Product.FindAsync(productId);

            if (  product == null)
            {
                return null;
            }

            // Create a new Review object
            var review = new Review
            {
                
                ProductId = productId,
                UserId=reviewDto.UserId,
                ReviewerName=reviewDto.ReviewerName,
               
                Content = reviewDto.Content,
                Rating = reviewDto.Rating,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            // Add the Review object to the Reviews table in the database
            await _storeContext.Reviews.AddAsync(review);
            await _storeContext.SaveChangesAsync();

            return review;
        }

        public async Task UpdateReviewAsync(int id, Review reviewDto)
        {
            var review = await _storeContext.Reviews.FindAsync(id);
            if (review == null)
            {
                throw new ArgumentException($"Review with ID {id} not found.");
            }

            review.ReviewerName = reviewDto.ReviewerName;
            review.Content = reviewDto.Content;
            review.Rating = reviewDto.Rating;
            review.UpdatedAt = DateTime.UtcNow;

            await _storeContext.SaveChangesAsync();
        }

        public async Task DeleteReviewAsync(int id)
        {
            var review = await _storeContext.Reviews.FindAsync(id);
            if (review == null)
            {
                throw new ArgumentException($"Review with ID {id} not found.");
            }

            _storeContext.Reviews.Remove(review);
            await _storeContext.SaveChangesAsync();
        }

        private Review MapReviewToDto(Review review)
        {
            return new Review
            {
                Id = review.Id,
                ProductId = review.ProductId,
                UserId = review.UserId,
                ReviewerName = review.ReviewerName,
                Content = review.Content,
                Rating = review.Rating,
                CreatedAt = review.CreatedAt,
                UpdatedAt = review.UpdatedAt
            };
        }

        private Review MapDtoToReview(Review reviewDto)
        {
            return new Review
            {
                ProductId = reviewDto.ProductId,
                UserId = reviewDto.UserId,
                ReviewerName = reviewDto.ReviewerName,
                Content = reviewDto.Content,
                Rating = reviewDto.Rating
            };
        }
    }
}
