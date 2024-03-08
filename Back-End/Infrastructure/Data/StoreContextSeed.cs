using Core.Models;
using Core.Models.OrderAggregate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class StoreContextSeed
    {
        public static async Task SeedAsync (StoreContext context)
        {
            if(!context.ProductBrands.Any())
            {
                //Path of json data file
                var brandsData = File.ReadAllText("");
                var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);
                context.ProductBrands.AddRange(brands);
            }

            if (!context.ProductTypes.Any())
            {
                //Path of json data file
                var typesData = File.ReadAllText("");
                var Types = JsonSerializer.Deserialize<List<ProductType>>(typesData);
                context.ProductBrands.AddRange((IEnumerable<ProductBrand>)Types);
            }

            if (!context.Products.Any())
            {
                //Path of json data file
                var productsData = File.ReadAllText("");
                var Products = JsonSerializer.Deserialize<List<ProductType>>(productsData);
                context.ProductBrands.AddRange((IEnumerable<ProductBrand>)Products);
            }

            if (!context.DeliveryMethod.Any())
            {
                //Path of json data file
                var deliveryData = File.ReadAllText("");
                var methods = JsonSerializer.Deserialize<List<DeliveryMethod>>(deliveryData);
                context.ProductBrands.AddRange((IEnumerable<ProductBrand>)methods);
            }

            if (context.ChangeTracker.HasChanges())
            {
                await context.SaveChangesAsync();
            }
        }

        internal object Set<T>()
        {
            throw new NotImplementedException();
        }
    }
}
