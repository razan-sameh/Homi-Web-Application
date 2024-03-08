using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Core.Models
{
    public class Supplier: BaseModel
    {
        //[Key]
        //public int SupplierID { get; set; }
        [Required]
        [Display(Name = "Company Name")]
        public string CompanyName { get; set; }
     
        [Display(Name = "Address")]
        public string? Address { get; set; }
        [Display(Name = "Contact Number:")]
      
        [RegularExpression("^([0-9]{10})$", ErrorMessage = "Invalid Number.")]
        public string? ContactMobile { get; set; }
        [Display(Name = "Job Title")]
        public string? ContactJobTitle { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime? created_at { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime? modified_at { get; set; }
    }
}
