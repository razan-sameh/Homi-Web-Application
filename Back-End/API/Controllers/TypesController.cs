using API.Dtos;
using AutoMapper;
using Core.Interfaces;
using Core.Models;
using Infrastructure.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TypesController : ControllerBase
    {
        private readonly IProductTypeRepository _productTypeService;
        private readonly UnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public TypesController(IProductTypeRepository productTypeService, UnitOfWork unitOfWork, IMapper mapper)
        {
            _productTypeService = productTypeService;
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProductType>> GetById(int id)
        {
            var productType = await _productTypeService.GetByIdAsync(id);

            if (productType == null)
            {
                return NotFound();
            }

            return Ok(productType);
        }

        [HttpGet]
        public async Task<ActionResult<List<ProductType>>> GetAll()
        {
            var productTypes = await _productTypeService.GetAllAsync();

            return Ok(productTypes);
        }

        [HttpPost]
        public async Task<ActionResult<ProductType>> Create(ProductTypeDto TypeDto)
        {
            var TypeEntity = _mapper.Map<ProductType>(TypeDto);

            await _productTypeService.CreateAsync(TypeEntity);
            TypeEntity.created_at = DateTime.Now;

            await _unitOfWork.Complete();
            return CreatedAtAction(nameof(GetById), new {id= TypeEntity.Id}, TypeEntity);


        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ProductType>> Update(int id, ProductTypeDto TypeDto)
        {
            var TypeEntity = _mapper.Map<ProductType>(TypeDto);
            TypeEntity.Id = id;
            TypeEntity.modified_at= DateTime.Now;

            await _productTypeService.UpdateAsync(TypeEntity.Id,TypeEntity);

            await _unitOfWork.Complete();
            var updatedTypeDto = _mapper.Map<ProductTypeDto>(TypeEntity);
            return Ok(updatedTypeDto);
            
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await _productTypeService.DeleteAsync(id);

            return NoContent();
        }
    }
}
