using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IProductTypeRepository
    {
        Task<ProductType> GetByIdAsync(int id);
        Task<List<ProductType>> GetAllAsync();
        Task<ProductType> CreateAsync(ProductType productType);
        Task<ProductType> UpdateAsync(int id, ProductType productType);
        Task DeleteAsync(int id);
    }
}
