using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specifictions
{
    public class ProductWithFiltersForCountSpecification : BaseSpecification<Product>
    {
        public ProductWithFiltersForCountSpecification(ProductSpecParams proParams) : base( x =>
        (string.IsNullOrEmpty(proParams.search) || x.Name.ToLower().Contains(proParams.search)) &&
        (!proParams.colorId.HasValue || x.ColorID == proParams.colorId) &&
        (!proParams.styleID.HasValue || x.StyleID == proParams.styleID) &&
        (!proParams.brandID.HasValue || x.ProductBrandId == proParams.brandID) &&
        (!proParams.typeID.HasValue || x.ProductTypeId == proParams.typeID)
        )
        { }
    }
}
