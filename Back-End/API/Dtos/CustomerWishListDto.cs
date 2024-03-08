using Core.Models;
using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class CustomerWishListDto
    {
        [Required]
        public string Id { get; set; }
        public List<WishListItem> Items { get; set; }
    }
}
