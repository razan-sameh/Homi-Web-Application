using Core.Models;
using Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

//namespace Infrastructure.Services
//{
//    public class ReviewSpec
//    {

//        private readonly StoreContext _storeContext;

//        public ReviewSpec(StoreContext storeContext)
//        {
//            _storeContext = storeContext;
//        }

//        public async Task<IEnumerable<Review>> GetReviewsAsync(int productId, int? minRating, int? maxRating)
//        {
//            var reviews = await _storeContext.Reviews
//                .Where(r => r.ProductId == productId)
//                .WhereIf(minRating.HasValue, r => r.Rating >= minRating.Value)
//                .WhereIf(maxRating.HasValue, r => r.Rating <= maxRating.Value)
//                .OrderByDescending(r => r.CreatedAt)
//                .ToListAsync();

//            return reviews.Select(r => MapReviewToDto(r));
//        }

//        private Review MapReviewToDto(Review review)
//        {
//            return new Review
//            {
//                Id = review.Id,
//                ProductId = review.ProductId,
//                UserId = review.UserId,
//                ReviewerName = review.ReviewerName,
//                Content = review.Content,
//                Rating = review.Rating,
//                CreatedAt = review.CreatedAt,
//                UpdatedAt = review.UpdatedAt
//            };
//        }
//    }
//}
