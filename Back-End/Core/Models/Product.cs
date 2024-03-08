using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Core.Models
{
    public class Product:BaseModel
    {

        [Required(ErrorMessage = "You must enter the name")]
        [MaxLength(30, ErrorMessage = "Too Long Name!!")]
        [Display(Name = "Product Name")]
        public string? Name { get; set; }

        public string? Dimensions { get; set; }

        [Display(Name = "Special Feature")]
        public string? SpecialFeature { get; set; }

        [DataType(DataType.ImageUrl)]
        public string? PictureURL { get; set; }

        public string? Describtion { get; set; }

        [Required]
        public int Stock { get; set; }

        [Required]
        [DataType(DataType.Currency)]

        public decimal PPrice { get; set; }


        //[Required]
        //[DataType(DataType.Currency)]
        //[Display(Name = "Product Price")]

        public decimal SPrice { get; set; }

    

        public Color? color { get; set; }
        public int ColorID { get; set; }

     

        public Style? style { get; set; }
        public int StyleID { get; set; }

        [ForeignKey("Supplier")]
        public int SupplierID { get; set; }
        public Supplier? supplier { get; set; }

        [ForeignKey("Discount")]
        public int DiscountID { get; set; }
        public Discount? Discount { get; set; }

        public ProductType? productType { get; set; }
        public int ProductTypeId { get; set; }
        public ProductBrand? productBrand { get; set; }

        public int ProductBrandId { get; set; }

        //   [Required]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime? created_at { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime? modified_at { get; set; }

        public ICollection<Review>? Reviews { set; get; } 

    }
}
