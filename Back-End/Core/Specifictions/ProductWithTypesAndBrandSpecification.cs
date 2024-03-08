using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specifictions
{
    public class ProductWithTypesAndBrandSpecification:BaseSpecification<Product>
    {
        public ProductWithTypesAndBrandSpecification(ProductSpecParams proParams) :base(x => 
        (string.IsNullOrEmpty(proParams.search) || x.Name.ToLower().Contains(proParams.search) )&&
        (!proParams.colorId.HasValue || x.ColorID == proParams.colorId) &&
        (!proParams.styleID.HasValue || x.StyleID == proParams.styleID) &&
        (!proParams.brandID.HasValue || x.ProductBrandId == proParams.brandID) &&
        (!proParams.typeID.HasValue || x.ProductTypeId == proParams.typeID)
        )

        {
            AddInclude(x => x.productBrand);
            AddInclude(x => x.productType);
            AddInclude(x => x.color);
            AddInclude(x => x.style);
            AddOrderBy(x => x.Name);
            ApplyPagging(proParams.PageSize * (proParams.PageIndex-1),proParams.PageSize);

            if (!string.IsNullOrEmpty(proParams.sort))
            {
                switch (proParams.sort)
                {
                    case "PriceAsc": AddOrderBy(x => x.SPrice);
                        break;
                    case "PriceDesc":
                        AddOrderByDes(x => x.SPrice);
                        break;
                    default:
                        AddOrderBy(x => x.Name);
                        break;
                }
            }
        }
        public ProductWithTypesAndBrandSpecification(int id): base(x=>x.Id==id)
        {
            AddInclude(x => x.productBrand);
            AddInclude(x => x.productType);
            AddInclude(x => x.color);
            AddInclude(x => x.style);

        }
        
    }
    
}
