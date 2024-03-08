using Core.Interfaces;
using Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Repositories
{
    public class ProductTypeRepository:IProductTypeRepository
    {
        private readonly StoreContext _context;

        public ProductTypeRepository(StoreContext context)
        {
            _context = context;
        }

        public async Task<ProductType> GetByIdAsync(int id)
        {
            return await _context.ProductTypes.FindAsync(id);
        }

        public async Task<List<ProductType>> GetAllAsync()
        {
            return await _context.ProductTypes.ToListAsync();
        }

        public async Task<ProductType> CreateAsync(ProductType productType)
        {
            _context.ProductTypes.Add(productType);
            await _context.SaveChangesAsync();
            return productType;
        }

        public async Task<ProductType> UpdateAsync(int id, ProductType productType)
        {
            var entity = await _context.ProductTypes.FindAsync(id);
            if (entity == null)
            {
                return null;
            }

            entity.Name = productType.Name;
            //entity.Description = productType.Description;

            await _context.SaveChangesAsync();

            return entity;
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _context.ProductTypes.FindAsync(id);
            if (entity != null)
            {
                _context.ProductTypes.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }

    }
}
