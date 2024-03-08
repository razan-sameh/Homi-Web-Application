using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Core.Models.OrderAggregate
{
    public class ProductItemOrdered
    {
        
        public ProductItemOrdered(int productItemId, string productName, string pictureURL)
        {
            ProductItemId = productItemId;
            ProductName = productName;
            PictureURL = pictureURL;
        }
        public int Id { get; set; }

        public int ProductItemId { get; set; }
        public string ProductName { get; set; }
        public string PictureURL { get; set; }
    }
}
