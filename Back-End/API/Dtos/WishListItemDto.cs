using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class WishListItemDto
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string ProductName { get; set; }

        [Required]
        [Range(100, double.MaxValue, ErrorMessage = "Price must be greater than one hundred")]
        public decimal Price { get; set; }

        public int Quantity { get; set; }

        [Required]
        public int Stock { get; set; }

        [Required]
        public string PictureUrl { get; set; }

        [Required]
        public string Brand { get; set; }

        [Required]
        public string Type { get; set; }
    }
}
