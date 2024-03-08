using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specifictions
{
    public class ReviewFilterSpecification : BaseSpecification<Review>
    {
        public ReviewFilterSpecification(int productId, int? minRating, int? maxRating) :
            base(r => r.ProductId == productId &&
                      (!minRating.HasValue || r.Rating >= minRating.Value) &&
                      (!maxRating.HasValue || r.Rating <= maxRating.Value))
        {
        }
    }
}
