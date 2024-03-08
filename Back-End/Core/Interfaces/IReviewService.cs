using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Core.Interfaces
{
    public interface IReviewService
    {

        Task<IEnumerable<Review>> GetReviewsAsync(int productId);
        Task<Review> CreateReviewAsync(Review reviewDto, int productId);
        Task UpdateReviewAsync(int id, Review reviewDto);
        Task DeleteReviewAsync(int id);
    }
}
