using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Models
{
    public class CustomerCart:BaseModel
    {
        ////[Key]
        ////public int CartID { get; set; }

        ////[ForeignKey("User")]
        ////public int UserId { get; set; }
        ////public User User { get; set; }

        //[Required]
        //[DataType(DataType.Currency)]

        //public int Total { get; set; }

        //[Required]
        //[DataType(DataType.Date)]
        //[DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
        //public DateTime created_at { get; set; }

        //[DataType(DataType.Date)]
        //[DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
        //public DateTime modified_at { get; set; }




        //CustomerBasket
        public CustomerCart()
        {

        }
        public CustomerCart(string id)
        {
            Id=id;
        }
        public string Id { get; set; }
        public List<CartItem> Items { get; set; }=new List<CartItem>();
        public int? DeliveryMethodId { get; set; }
        public string? ClientSecret { get; set; }
        public string? PaymentIntentId { get; set; }
        public decimal ShippingPrice { get; set; }
    }
}
