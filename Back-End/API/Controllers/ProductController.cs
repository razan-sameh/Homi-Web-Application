using API.Errors;
using API.Dtos;
using API.Helpers;
using AutoMapper;
using Core.Interfaces;
using Core.Models;
using Core.Specifictions;
using Infrastructure.Data;
using Infrastructure.Data.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Stripe;
using System.Diagnostics;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : BaseApiController
    {
        private readonly IProductRepository _productRepository;
        private readonly IGenericRepository<Core.Models.Product> _productRepo;
        private readonly IGenericRepository<ProductBrand> _ProductBrandRepo;
        private readonly IGenericRepository<ProductType> _ProductTypeRepo;
        private readonly IGenericRepository<Color> _ProductColor;
        private readonly IGenericRepository<Style> _ProductStyle;
        private readonly IGenericRepository<Supplier> _supplier;
        private readonly IGenericRepository<Core.Models.Discount> _Discount;
        private readonly StoreContext _context;

        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        private readonly ILogger<Core.Models.Product> _logger;

        public ProductController(
            IProductRepository productRepository,
            IMapper mapper,
            IGenericRepository<ProductBrand> brandRepository,
            IGenericRepository<ProductType> typeRepository,
            IGenericRepository<Core.Models.Product> productRepo,
            IGenericRepository<Color> productColor,
            IGenericRepository<Style> productStyle,
            StoreContext context,
            ILogger<Core.Models.Product> logger,
            IGenericRepository<Supplier> supplier,
             IGenericRepository<Core.Models.Discount> discount,
             IUnitOfWork unitOfWork
            )
        {
            _productRepository = productRepository;
            _ProductBrandRepo = brandRepository;
            _ProductTypeRepo = typeRepository;
            _productRepo = productRepo;
            _mapper = mapper;
            _ProductColor = productColor;
            _ProductStyle = productStyle;
            _context = context;
            _logger = logger;
            _supplier= supplier;
            _Discount= discount;
            _unitOfWork = unitOfWork;
        }

        [HttpGet("AllProducts")]
        public async Task<ActionResult<Pagination<ProductToReturnDto>>> GetProducts([FromQuery]ProductSpecParams proParams)
        {
            var spec = new ProductWithTypesAndBrandSpecification(proParams);
            var countSpec = new ProductWithFiltersForCountSpecification(proParams);
            var totalItems = await _productRepo.CountAsync(countSpec);
            var products = await  _productRepo.ListAsync(spec);
            var data = _mapper.Map<IReadOnlyList<Core.Models.Product>, IReadOnlyList<ProductToReturnDto>>(products);
            return Ok(new Pagination<ProductToReturnDto>(proParams.PageIndex,proParams.PageSize,totalItems,data));
        }

        [HttpGet("Product/{id}")]
        public async Task <ActionResult<ProductToReturnDto>> GetProduct(int id)
        {
            var spec = new ProductWithTypesAndBrandSpecification(id);
            var product = await _productRepo.GetEntityWithSpec(spec);
            return _mapper.Map<Core.Models.Product, ProductToReturnDto>(product);
        }

        [HttpGet("Types")]
        public async Task<ActionResult<IReadOnlyList<ProductType>>> GetProductType()
        {
            return Ok(await _ProductTypeRepo.ListAllAsync());
        }
        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<ProductBrand>>> GetProductBrands()
        {
            return Ok(await _ProductBrandRepo.ListAllAsync());
        }
        [HttpGet("Colors")]
        public async Task<ActionResult<IReadOnlyList<Color>>> GetProductColors()
        {
            return Ok(await _ProductColor.ListAllAsync());
        }
        [HttpGet("Styles")]
        public async Task<ActionResult<IReadOnlyList<Style>>> GetProductStyles()
        {
            return Ok(await _ProductStyle.ListAllAsync());
        }
        [HttpGet("Supplier")]
        public async Task<ActionResult<IReadOnlyList<Supplier>>> GetProductSupplier()
        {
            return Ok(await _supplier.ListAllAsync());
        }
        [HttpGet("Discount")]
        public async Task<ActionResult<IReadOnlyList<Core.Models.Discount>>> GetProductDiscount()
        {
            return Ok(await _Discount.ListAllAsync());
        }
        //admin controllers



        [HttpGet("Admin/AllProducts")]
        public async Task<ActionResult<IReadOnlyList<ProductToReturnDto>>> GetAllProducts()
        {
            var products = await _productRepository.ListAllAsync();
            var data = _mapper.Map<IReadOnlyList<ProductToReturnDto>>(products);
            return Ok( data);





        }

        //admin controllers 



        [HttpPost]
        public async Task<ActionResult<ProductToReturnDto>> CreateProduct(ProductToReturnDto productDto)
        {
            if (productDto == null)
            {
                return BadRequest("ProductDto cannot be null");
            }
            if (string.IsNullOrWhiteSpace(productDto.Name))
            {
                throw new ArgumentException("Product name cannot be empty or whitespace.", nameof(productDto));
            }


            var productEntity = _mapper.Map<Core.Models.Product>(productDto);

            try
            {
                // your code that is causing the error
                productEntity.modified_at= DateTime.UtcNow;
                _context.Products.Add(productEntity);
                await _context.SaveChangesAsync(); // this line is causing the error
            }
            catch (Exception ex)
            {
                // log the inner exception message and any relevant variables
                _logger.LogError(ex.InnerException?.Message);
                _logger.LogError($"Product name: {productEntity.Name}, Product price: {productEntity.ColorID}, ...");
                throw;
            }
            //var colorId = await _context.ProductColors.Where(p => p.Name == productDto.color).Select(p => p.Id).FirstOrDefaultAsync();
            //var styleID = await _context.ProductStyles.Where(p => p.Name == productDto.style).Select(p => p.Id).FirstOrDefaultAsync();
            //var supplierID = await _context.Supplier.Where(p => p.CompanyName == productDto.Supplier).Select(p => p.Id).FirstOrDefaultAsync();
            //var discountID = await _context.Discounts.Where(p => p.Discount_Percent == productDto.Discount.ToString()).Select(p => p.Id).FirstOrDefaultAsync();
            //var typeID = await _context.ProductTypes.Where(p => p.Name == productDto.productType).Select(p => p.Id).FirstOrDefaultAsync();
            //var brandID = await _context.ProductBrands.Where(p => p.Name == productDto.productBrand).Select(p => p.Id).FirstOrDefaultAsync();

            //var resultProduct = new Core.Models.Product
            //{

            //    Name = productDto.Name,
            //    Dimensions = productDto.Dimensions,
            //    SpecialFeature = productDto.SpecialFeature,
            //    PictureURL = productDto.PictureURL,
            //    Describtion = productDto.Describtion,
            //    Stock = productDto.Stock,
            //    PPrice = productDto.PPrice,
            //    SPrice = productDto.SPrice,
            //    ColorID = colorId,
            //    StyleID = styleID,
            //    SupplierID = supplierID,
            //    DiscountID = discountID,
            //    ProductTypeId = typeID,
            //    ProductBrandId = brandID

            //};

            //await _productRepo.AddAsync(productEntity);

            // Save changes to the database
            //await _unitOfWork.Complete();

            // Map the updated Product entity back to a ProductDto
            var createdProductDto = _mapper.Map<ProductToReturnDto>(productEntity);

            

            return CreatedAtAction(nameof(GetProduct), new { id = createdProductDto.Product_ID }, createdProductDto);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ProductToReturnDto>> UpdateProduct(int id, ProductToReturnDto productDto)
        {
            // Map the ProductDto to a Product entity
            var productEntity = _mapper.Map<Core.Models.Product>(productDto);
            productEntity.Id = id;

            // Update the Product entity in the database
            await _productRepo.UpdateAsync(productEntity);

            // Save changes to the database
            await _unitOfWork.Complete();

            // Map the updated Product entity back to a ProductDto
            var updatedProductDto = _mapper.Map<ProductToReturnDto>(productEntity);

            return Ok(updatedProductDto);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProduct(int id)
        {
            // Get the Product entity from the database
            var productEntity = await _productRepository.GetProductByIdAsync(id);

            if (productEntity == null)
            {
                return NotFound();
            }

            // Delete the Product entity from the database
            await _productRepo.DeleteAsync(productEntity);

            // Save changes to the database
            await _unitOfWork.Complete();

            return NoContent();
        }

        //[HttpPost]
        //public async Task<ActionResult<Product>> CreateProduct([FromBody] Product product)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(new ApiResponse (401));
        //    }
        //    var CreatedProduct= await _productRepository.CreateProductAsync(product);
        //   // var createdProduct = await new ProductRepository.CreateProductAsync(product);
        //    CreatedProduct.created_at= DateTime.Now;
        //    CreatedProduct.modified_at= DateTime.Now;

        //    return CreatedAtAction(nameof(GetProduct), new { id = CreatedProduct.Id }, CreatedProduct);
        //}

        //[HttpPost]
        //public async Task<IActionResult> CreateProduct([FromBody] ProductToReturnDto productDto)
        //{
        //    var product = _mapper.Map<Product>(productDto);

        //    await _Context.Products.AddAsync(product);
        //    await _context.SaveChangesAsync();

        //    var productResponse = _mapper.Map<ProductResponseDTO>(product);

        //    return Ok(productResponse);
        //}

        //[HttpPut("{id}")]
        //public async Task<IActionResult> UpdateProduct(int id, [FromBody] Product product)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(new ApiResponse(401));
        //    }

        //    await _productRepository.UpdateProductAsync(id, product);

        //    return NoContent();
        //}

        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteProduct(int id)
        //{
        //    await _productRepository.DeleteProductAsync(id);

        //    return NoContent();
        //}
    }
}
//public ICategoryServ CategoryRepo { get; set; }
//public CategoryController(ICategoryServ categoryRepo)
//{
//    CategoryRepo = categoryRepo;xc
//}
//[HttpGet]
//public ActionResult<List<Category>> getCategories()
//{
//    return CategoryRepo.GetAll();
//}

////[HttpGet]
////public ActionResult<List<Category>> GetCategoriesDropDownList()
////{
////    return CategoryRepo.GetAll();
////}

//[HttpGet("{id}")]
//public ActionResult<Category> getById(int id)
//{
//    return CategoryRepo.GetDetails(id);
//}

//[HttpDelete("{id}")]
//public ActionResult DeleteCategory(int id)
//{
//    //Category category = CategoryRepo.GetDetails(id);

//    //if (category == null)
//    //{
//    //    return NotFound();
//    //}
//    CategoryRepo.Delete(id);
//    return Ok();
//}

//[HttpPut]
//public ActionResult Put(Category category)
//{
//    if (category != null && category.Id != 0)
//    {
//        CategoryRepo.Update(category);
//        return Ok(category);
//    }
//    return NotFound();
//}

//[HttpPost]
//public ActionResult Post(Category category)
//{
//    if (ModelState.IsValid)
//    {
//        try
//        {
//            CategoryRepo.Insert(category);
//            return Created("url", category);
//            // return 201 & Url is the place where you added the object
//        }
//        catch (Exception ex)
//        {
//            return BadRequest(ex.Message); // Return 400!
//        }
//    }
//    return BadRequest();
//}
//    }