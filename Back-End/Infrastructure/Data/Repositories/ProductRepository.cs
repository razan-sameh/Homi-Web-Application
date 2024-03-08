using AutoMapper;
using Core.Interfaces;
using Core.Models;
using Core.Specifictions;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly IMapper _mapper;
        private readonly StoreContext _context;
        private readonly IGenericRepository<Product> _repo;
        //private readonly IUnitOfWork _unitOfWork;
        public ProductRepository(StoreContext context,IGenericRepository<Product> repo)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _repo = repo ?? throw new ArgumentNullException(nameof(repo));
        }

        //private readonly IProductRepository _productRepository;
        //private readonly IUnitOfWork _unitOfWork;

        //public ProductService(IProductRepository productRepository, IUnitOfWork unitOfWork)
        //{
        //    _productRepository = productRepository;
        //    _unitOfWork = unitOfWork;
        //}


        public async Task<IReadOnlyList<Product>> GetProductsAsync()
        {
            return await _context.Products
                .Include(p => p.productBrand)
                .Include(p => p.productType)
                .Include(p => p.color)
                .Include(p => p.style)
                .ToListAsync();
        }

        public async Task<Product> GetProductByIdAsync(int id)
        {
            return await _context.Products
                .Include(p => p.productBrand)
                .Include(p => p.productType)
                .Include(p => p.color)
                .Include(p => p.style)
                .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<IReadOnlyList<ProductBrand>> GetProductBrandsAsync()
        {
            return await _context.ProductBrands.ToListAsync();
        }

        public async Task<IReadOnlyList<ProductType>> GetProductTypessAsync()
        {
            return await _context.ProductTypes.ToListAsync();
        }

        public async Task<IReadOnlyList<Color>> GetProductColorsAsync()
        {
            return await _context.ProductColors.ToListAsync();
        }

        public async Task<IReadOnlyList<Style>> GetProductStylessAsync()
        {
            return await _context.ProductStyles.ToListAsync();
        }

        public Task<Product> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IReadOnlyList<Product>> ListAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<Product> GetEntityWithSpec(ISpecification<Product> spec)
        {
            throw new NotImplementedException();
        }

        public Task<IReadOnlyList<Product>> ListAsync(ISpecification<Product> spec)
        {
            throw new NotImplementedException();
        }

        public Task<int> CountAsync(ISpecification<Product> spec)
        {
            throw new NotImplementedException();
        }

        public async Task<Product> AddAsync(Product product)
        {
            //await _context.AddAsync(product);
            //await _context.SaveChangesAsync();
            //return product;
            return await _repo.AddAsync(product);
        }

        //public async Task<ProductDto> CreateProductAsync(ProductDto productDto)
        //{
        //    var product = _mapper.Map<ProductDto, Product>(productDto);
        //    _unitOfWork.Products.Add(product);
        //    await _unitOfWork.CompleteAsync();
        //    return _mapper.Map<Product, ProductDto>(product);
        //}

        public async Task UpdateAsync(Product entity)
        {
            await _repo.UpdateAsync(entity);
        }

        public async Task DeleteAsync(Product entity)
        {
             await _repo.DeleteAsync(entity);
        }

        ///admin
        //public async Task<Product> CreateProductAsync(Product product)
        //{
        //    _context.Products.Add(product);
        //    await _context.SaveChangesAsync();

        //    return product;
        //}

        //public async Task UpdateProductAsync(int id, Product product)
        //{
        //    var existingProduct = await _context.Products.FindAsync(id);

        //if (existingProduct == null)
        //{

        //   throw new NotFoundException($"Product with id {id} not found.");
        //}

        //    existingProduct.Name = product.Name;
        //    existingProduct.Dimensions = product.Dimensions;
        //    existingProduct.SpecialFeature = product.SpecialFeature;
        //    existingProduct.PictureURL = product.PictureURL;
        //    existingProduct.Describtion = product.Describtion;
        //    existingProduct.Stock = product.Stock;
        //    existingProduct.PPrice = product.PPrice;
        //    existingProduct.SPrice = product.SPrice;
        //    existingProduct.ColorID = product.ColorID;
        //    existingProduct.StyleID = product.StyleID;
        //    existingProduct.SupplierID = product.SupplierID;
        //    existingProduct.DiscountID = product.DiscountID;
        //    existingProduct.ProductTypeId = product.ProductTypeId;
        //    existingProduct.ProductBrandId = product.ProductBrandId;
        //    existingProduct.modified_at = DateTime.UtcNow;

        //    await _context.SaveChangesAsync();
        //}

        //public async Task DeleteProductAsync(int id)
        //{
        //    var existingProduct = await _context.Products.FindAsync(id);

        //    //if (existingProduct == null)
        //    //{

        //    //  return  BadRequest(new ApiResponse(400, "Problem creating order"));
        //    //}

        //    _context.Products.Remove(existingProduct);
        //    await _context.SaveChangesAsync();
        //}


    }
}
