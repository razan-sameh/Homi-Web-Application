using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Core.Models
{
    public class Discount:BaseModel
    {
        //[Key]
        //public int DiscountID { get; set; }
        [Display(Name = "Discount Name")]
        public string Name { get; set; }
      //  [Required]
        public string? Desc { get; set; }
        [Required]
        public string Discount_Percent { get; set; }

       
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy}", ApplyFormatInEditMode = true)]
        [Display(Name = "Expiration Date")]
        public DateTime? Expire_Date { get; set; }

        //   [Required]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime? created_at { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime? modified_at { get; set; }
    }
}
