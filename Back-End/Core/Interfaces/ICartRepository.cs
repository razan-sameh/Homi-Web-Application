using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface ICartRepository
    {
        Task<CustomerCart> GetCartAsync(string basketId);
        Task<CustomerCart> UpdateBasketAsync(CustomerCart cart);
        Task<bool> DeleteBasketAsync(string basketId);

    }
}
