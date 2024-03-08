using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Models
{
    public class CustomerWishList
    {
        public CustomerWishList()
        {

        }
        public CustomerWishList(string id)
        {
            Id = id;
        }
        public string Id { get; set; }
        public List<WishListItem> Items { get; set; } = new List<WishListItem>();
    }
}
