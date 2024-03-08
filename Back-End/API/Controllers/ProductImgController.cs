using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductImgController : ControllerBase
    {
        private readonly IWebHostEnvironment _webHostEnvironment;

        public ProductImgController(IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
        }

        [HttpPost]
        public async Task<IActionResult> Upload(IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("No file uploaded.");
            }

            // Get the filename and extension of the uploaded file
            string fileName = Path.GetFileNameWithoutExtension(file.FileName);
            string fileExt = Path.GetExtension(file.FileName);

            // Generate a unique filename for the uploaded file
            string uniqueFileName = $"{Guid.NewGuid()}{fileExt}";

            // Save the uploaded file to the server
            string filePath = Path.Combine(_webHostEnvironment.ContentRootPath, "assets", "img", "products", uniqueFileName);
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            // Return the URL of the uploaded file to the client
            string fileUrl = $"/assets/img/products/{uniqueFileName}";
            return Ok(new { url = fileUrl });
        }
    }
}
