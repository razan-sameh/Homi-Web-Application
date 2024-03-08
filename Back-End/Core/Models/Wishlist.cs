using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Models
{
    internal class Wishlist : BaseModel
    {
        //[Key]
        //public int wishID { get; set; }

        [ForeignKey("Product")]
        public int ProId { get; set; }
        public Product Product { get; set; }

        //[ForeignKey("User")]
        //public int UserId { get; set; }
        //public User User { get; set; }

        [Required]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime created_at { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime modified_at { get; set; }
    }
}
