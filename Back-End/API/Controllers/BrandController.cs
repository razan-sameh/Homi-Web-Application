using API.Dtos;
using AutoMapper;
using Core.Interfaces;
using Core.Models;
using Infrastructure.Data;
using Infrastructure.Data.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Drawing.Drawing2D;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandController : ControllerBase
    {
        private readonly GenericRepo<ProductBrand> _repo;
        private readonly UnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public BrandController(GenericRepo<ProductBrand> repo, UnitOfWork unitOfWork,IMapper mapper)
        {
            _repo = repo;
            _unitOfWork = unitOfWork;
            _mapper = mapper;
                
        }

        [HttpPost]
        public async Task<ActionResult<ProductBrand>> CreateBrand(BrandDto brandDto)
        {

            var brandEntity = _mapper.Map<ProductBrand>(brandDto);

           
            await _repo.AddAsync(brandEntity);

            
            await _unitOfWork.Complete();


            return CreatedAtAction(nameof(GetBrandById), new { id = brandEntity.Id }, brandEntity);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ProductBrand>> UpdateBrand(int id, BrandDto brandDto)
        {
            var brandEntity= _mapper.Map<ProductBrand>(brandDto);
            brandEntity.Id = id;
            
           //var updatedBrand = await _repo.GetByIdAsync(id);

            // Update the Product entity in the database
            await _repo.UpdateAsync(brandEntity);

            // Save changes to the database
            await _unitOfWork.Complete();
            var updatedBrandDto = _mapper.Map<BrandDto>(brandEntity);
            return Ok(updatedBrandDto);



        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProduct(int id)
        {
            // Get the Product entity from the database
            var productEntity = await _repo.GetByIdAsync(id);

            if (productEntity == null)
            {
                return NotFound();
            }

            // Delete the Product entity from the database
            await _repo.DeleteAsync(productEntity);

            // Save changes to the database
            await _unitOfWork.Complete();

            return NoContent();


        }


        [HttpGet]
        public async Task<ActionResult<List<ProductBrand>>> GetAllBrands()
        {
            var productBrandModels = await _repo.ListAllAsync();

            if (productBrandModels == null || productBrandModels.Count == 0)
            {
                return NotFound();
            }

            return Ok(productBrandModels);
        }

        //[HttpGet]
        //public async Task<ActionResult<List<ProductBrand>>> GetAllBrands()
        //{

        //        var productBrandModels = await _repo.ListAllAsync();
        //        return Ok(productBrandModels);

        //}

        [HttpGet("{id}")]
        public async Task<ActionResult<ProductBrand>> GetBrandById(int id)
        {
            try
            {
                var productBrand = await _repo.GetByIdAsync(id);
                return Ok(productBrand);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error retrieving product brand model with id {id}: {ex.Message}");
            }
        }
    }
}
