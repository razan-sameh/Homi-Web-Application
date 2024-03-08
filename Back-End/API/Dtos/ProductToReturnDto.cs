using Core.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class ProductToReturnDto
    {
        [Key]
        public int Product_ID { get; set; }

        [Display(Name = "Product Name")]
        public string? Name { get; set; }
        public string Dimensions { get; set; }

        [Display(Name = "Special Feature")]
        public string SpecialFeature { get; set; }

        
        public string PictureURL { get; set; }

        public string Describtion { get; set; }

        public int Stock { get; set; }

        
        public decimal SPrice { get; set; }

        public decimal PPrice { get; set; }

        [Display(Name = "Product Color")]
        public string color { get; set; }
        

        public string style { get; set; }

        public string Supplier { get; set; }

        public int Discount { get; set; }

        public string productType { get; set; }
        public string productBrand { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }



    }
}
