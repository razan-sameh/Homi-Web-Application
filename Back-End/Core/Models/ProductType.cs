using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace Core.Models
{
    public class ProductType:BaseModel
    {
        //public int Id { get; set; }
        [Display(Name = "Category Name")]
        [Required(ErrorMessage = "You Must Enter The Name")]
        public string Name { get; set; }

        //   [Required]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime? created_at { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime? modified_at { get; set; }
    }
}