using Core.Interfaces;
using Core.Models;
using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Infrastructure.Data.Repositories
{
    public class WishListRepository : IwishListRepository
    {
        private readonly IDatabase _database;

        public WishListRepository(IConnectionMultiplexer redis)
        {
            _database = redis.GetDatabase();
        }
        public async Task<bool> DeleteBasketAsync(string wishListId)
        {
            return await _database.KeyDeleteAsync(wishListId);
        }

        public async Task<CustomerWishList> GetCartAsync(string wishListId)
        {
            var data = await _database.StringGetAsync(wishListId);
            return data.IsNullOrEmpty ? null : JsonSerializer.Deserialize<CustomerWishList>(data);
        }

        public async Task<CustomerWishList> UpdateBasketAsync(CustomerWishList wishList)
        {
            var created = await _database.StringSetAsync(wishList.Id, JsonSerializer.Serialize(wishList), TimeSpan.FromDays(30));
            if (!created) return null;
            return await GetCartAsync(wishList.Id);
        }
    }
}
