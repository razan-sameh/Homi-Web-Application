using System;
using Core.Models;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



namespace Core.Interfaces
{
    public interface IProductRepository : IGenericRepository<Product>
    {
        Task<Product> GetProductByIdAsync(int id);
        Task<IReadOnlyList<Product>> GetProductsAsync();

        //lec22,23 i didn't write thier codes
        Task<IReadOnlyList<ProductBrand>> GetProductBrandsAsync();

       Task<IReadOnlyList<ProductType>> GetProductTypessAsync();
        Task<IReadOnlyList<Color>> GetProductColorsAsync();
        Task<IReadOnlyList<Style>> GetProductStylessAsync();
        //admin

        





        //Task<ProductResponseDto> CreateProduct(CreateProductDto productDto);
        //Task<ProductResponseDto> UpdateProduct(int id, CreateProductDto productDto);
        //Task<bool> DeleteProduct(int id);




        /////////////////////////////////////
        //public T? GetDetails(int id);
        //public void Insert(T t);
        //public void UpdateBayza(int id, T t);
        //public void Update(T entity);
        //public void Delete(int id)
    }
}
