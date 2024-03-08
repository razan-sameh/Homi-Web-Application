using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IwishListRepository
    {
        Task<CustomerWishList> GetCartAsync(string wishListId);
        Task<CustomerWishList> UpdateBasketAsync(CustomerWishList wishList);
        Task<bool> DeleteBasketAsync(string wishListId);
    }
}
