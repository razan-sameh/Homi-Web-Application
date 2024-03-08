using API.Dtos;
using AutoMapper;
using AutoMapper.Execution;
using Core.Models;

namespace API.Helpers
{

    //public class ProductUrlResolver : IValueResolver<Product, ProductToReturnDto, string>
    //{
    //    private readonly IConfiguration _config; 
    //    public ProductUrlResolver(IConfiguration config)
    //    {
    //        _config = config;
    //    }
    //    public string Resolve(Product source, ProductToReturnDto destination, string destMember, ResolutionContext context)
    //    {
    //        if(!string.IsNullOrEmpty(source.PictureURL)) 
    //        {
    //            return _config["ApiUrl"]+source.PictureURL;
    //        }
    //        return null;
    //    }
    //}


}
