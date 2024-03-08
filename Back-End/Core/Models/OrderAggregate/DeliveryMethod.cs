using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Models.OrderAggregate
{
    public class DeliveryMethod:BaseModel
    {
        public string shortName { get; set; }
        public string DeliveryTime { get; set; }

        public string Discription { get; set; }
        public decimal Price { get; set; }
    }
}
