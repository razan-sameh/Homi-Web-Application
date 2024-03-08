using API.Dtos;
using AutoMapper;
using Core.Models.OrderAggregate;

namespace API.Helpers
{
    //public class OrderItemUrlResolver : IValueResolver<OrderItem, OrderItemDto, string>
    //{
    //    private readonly IConfiguration _config;
    //    public OrderItemUrlResolver(IConfiguration config)
    //    {
    //        _config = config;
    //    }

    //    public string Resolve(OrderItem source, OrderItemDto destination, string destMember, ResolutionContext context)
    //    {
    //        if (!string.IsNullOrEmpty(source.ItemOrdered.PictureURL))
    //        {
    //            return _config["ApiUrl"] + source.ItemOrdered.PictureURL;
    //        }

    //        return null;
    //    }
    //}
}
