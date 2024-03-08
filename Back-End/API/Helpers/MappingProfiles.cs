using API.Dtos;
using AutoMapper;
using Core.Models;
using Core.Models.OrderAggregate;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using StackExchange.Redis;
using System.Xml;
using static NUnit.Framework.Internal.OSPlatform;
using Order = Core.Models.OrderAggregate.Order;
using ProductType = Core.Models.ProductType;



namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        
        public MappingProfiles()
        {
            CreateMap<Product, ProductToReturnDto>()
                .ForMember(dest => dest.Product_ID, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.color, opt => opt.MapFrom(src => src.color != null ? src.color.Name : null))
                .ForMember(dest => dest.style, opt => opt.MapFrom(src => src.style != null ? src.style.Name : null))
                .ForMember(dest => dest.Supplier, opt => opt.MapFrom(src => src.supplier != null ? src.supplier.CompanyName : null))
                .ForMember(dest => dest.Discount, opt => opt.MapFrom(src => src.Discount != null ? int.Parse(src.Discount.Discount_Percent) : 0))
                .ForMember(dest => dest.productType, opt => opt.MapFrom(src => src.productType != null ? src.productType.Name : null))
                .ForMember(dest => dest.productBrand, opt => opt.MapFrom(src => src.productBrand != null ? src.productBrand.Name : null))
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => src.created_at ?? DateTime.MinValue))
                .ForMember(dest => dest.ModifiedAt, opt => opt.MapFrom(src => src.modified_at))
                .ReverseMap();


            CreateMap<ProductToReturnDto, Product>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Product_ID))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
                .ForMember(dest => dest.Dimensions, opt => opt.MapFrom(src => src.Dimensions))
                .ForMember(dest => dest.SpecialFeature, opt => opt.MapFrom(src => src.SpecialFeature))
                .ForMember(dest => dest.PictureURL, opt => opt.MapFrom(src => src.PictureURL))
                .ForMember(dest => dest.Describtion, opt => opt.MapFrom(src => src.Describtion))
                .ForMember(dest => dest.Stock, opt => opt.MapFrom(src => src.Stock))
                .ForMember(dest => dest.PPrice, opt => opt.MapFrom(src => src.PPrice))
                .ForMember(dest => dest.SPrice, opt => opt.MapFrom(src => src.SPrice))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
                .ForMember(dest => dest.color, opt => opt.MapFrom<ColorNameResolver>())
                .ForMember(dest => dest.ColorID, opt => opt.MapFrom<ColorIdValueResolver>())

                .ForMember(dest => dest.style, opt => opt.MapFrom<StyleNameResolver>())
                .ForMember(dest => dest.StyleID, opt => opt.MapFrom<StyleIdValueResolver>())

                .ForMember(dest => dest.supplier, opt => opt.MapFrom<SupplierNameResolver>())
                .ForMember(dest => dest.SupplierID, opt => opt.MapFrom<SupplierIdValueResolver>())

                .ForMember(dest => dest.Discount, opt => opt.MapFrom<DiscountValueResolver>())
                .ForMember(dest => dest.DiscountID, opt => opt.MapFrom<DiscountIdValueResolver>())

                .ForMember(dest => dest.productType, opt => opt.MapFrom<TypeValueResolver>())
                .ForMember(dest => dest.ProductTypeId, opt => opt.MapFrom<TypeIdValueResolver>())

                .ForMember(dest => dest.productBrand, opt => opt.MapFrom<BrandValueResolver>())
                .ForMember(dest => dest.ProductBrandId, opt => opt.MapFrom<BrandIdValueResolver>())



                ;




            CreateMap<ProductBrand, ProductToReturnDto>()
            .ReverseMap();

            CreateMap<Color, ProductToReturnDto>()
                .ForMember(dest => dest.color, opt => opt.MapFrom(src => src.Name))
                .ReverseMap();

            CreateMap<Style, ProductToReturnDto>()
                .ForMember(dest => dest.style, opt => opt.MapFrom(src => src.Name))
                .ReverseMap();

            CreateMap<Supplier, ProductToReturnDto>()
                .ForMember(dest => dest.Supplier, opt => opt.MapFrom(src => src.CompanyName))
                .ReverseMap();

            CreateMap<Discount, ProductToReturnDto>()
              .ForMember(dest => dest.Discount, opt => opt.MapFrom(src => int.Parse(src.Discount_Percent)))
              .ReverseMap();

            CreateMap<ProductType, ProductToReturnDto>()
                .ForMember(dest => dest.productType, opt => opt.MapFrom(src => src.Name))
                .ReverseMap();

            
            CreateMap<AddressForOrders,AddressDto>().ReverseMap();

            CreateMap<AddressDto, Core.Models.OrderAggregate.AddressForOrders>();
            CreateMap<CustomerCartDto,CustomerCart>().ReverseMap();
            CreateMap<CartItemDto,CartItem>().ReverseMap();

            //wishlist
            CreateMap<CustomerWishListDto, CustomerWishList>().ReverseMap();
            CreateMap<WishListItemDto, WishListItem>().ReverseMap();

            CreateMap<Order, OrderToReturnDto>()
               .ForMember(d => d.DeliveryMethod, o => o.MapFrom(s => s.DeliveryMethod.shortName))
               .ForMember(d => d.ShippingPrice, o => o.MapFrom(s => s.DeliveryMethod.Price));
            CreateMap<OrderItem, OrderItemDto>()
                .ForMember(d => d.ProductId, o => o.MapFrom(s => s.ItemOrdered.ProductItemId))
                .ForMember(d => d.ProductName, o => o.MapFrom(s => s.ItemOrdered.ProductName))
                .ForMember(d => d.PictureUrl, o => o.MapFrom(s => s.ItemOrdered.PictureURL));
            



            //brand mapping

            CreateMap<BrandDto, ProductBrand>().ReverseMap();

            CreateMap<ProductTypeDto, ProductType>().ReverseMap();


            //review

            CreateMap<Review, ReviewDto>()
           .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
           //.ForMember(dest => dest.ProductId, opt => opt.MapFrom(src => src.ProductId))
           //.ForMember(dest => dest.UserId, opt => opt.MapFrom(src => src.UserId))
           //.ForMember(dest => dest.ReviewerName, opt => opt.MapFrom(src => src.ReviewerName))
           .ForMember(dest => dest.Content, opt => opt.MapFrom(src => src.Content))
           .ForMember(dest => dest.Rating, opt => opt.MapFrom(src => src.Rating));

            CreateMap<ReviewDto, Review>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                //.ForMember(dest => dest.ProductId, opt => opt.MapFrom(src => src.ProductId))
                //.ForMember(dest => dest.UserId, opt => opt.MapFrom(src => src.UserId))
                //.ForMember(dest => dest.ReviewerName, opt => opt.MapFrom(src => src.ReviewerName))
                .ForMember(dest => dest.Content, opt => opt.MapFrom(src => src.Content))
                .ForMember(dest => dest.Rating, opt => opt.MapFrom(src => src.Rating));
        }
    }
    public class ColorNameResolver : IValueResolver<ProductToReturnDto, Product, Color>
    {
        private readonly StoreContext _context;

        public ColorNameResolver(StoreContext context)
        {
            _context = context;
        }

        public Color Resolve(ProductToReturnDto source, Product destination, Color destMember, ResolutionContext context)
        {
            if (source.color != null)
            {
                var productColor = _context.ProductColors.FirstOrDefault(pc => pc.Name == source.color);
                if (productColor != null)
                {
                    destination.ColorID = productColor.Id;
                    destination.color = productColor;
                    return destination.color;
                }
            }

            return destination.color;
        }
    }
    public class ColorIdValueResolver : IValueResolver<ProductToReturnDto, Product, int>
    {
        private readonly StoreContext _context;

        public ColorIdValueResolver(StoreContext context)
        {
            _context = context;
        }
        public int Resolve(ProductToReturnDto source, Product destination, int destMember, ResolutionContext context)
        {
            if (source.color != null)
            {
                var productColor = _context.ProductColors.FirstOrDefault(pc => pc.Name == source.color);
                if (productColor != null)
                {
                    destination.ColorID = productColor.Id;
                   
                    return destination.ColorID;
                }
            }

            return 1;
        }
    }

    // // //
    public class StyleNameResolver : IValueResolver<ProductToReturnDto, Product, Style>
    {
        private readonly StoreContext _context;

        public StyleNameResolver(StoreContext context)
        {
            _context = context;
        }

        public Style Resolve(ProductToReturnDto source, Product destination, Style destMember, ResolutionContext context)
        {
            if (source.style != null)
            {
                var productStyle = _context.ProductStyles.FirstOrDefault(pc => pc.Name == source.style);
                if (productStyle != null)
                {
                    destination.StyleID = productStyle.Id;
                    destination.style = productStyle;
                    return destination.style;
                }
            }

            throw new NotImplementedException();
        }
    }

    public class StyleIdValueResolver : IValueResolver<ProductToReturnDto, Product, int>
    {
        private readonly StoreContext _context;

        public StyleIdValueResolver(StoreContext context)
        {
            _context = context;
        }
        public int Resolve(ProductToReturnDto source, Product destination, int destMember, ResolutionContext context)
        {
            if (source.style != null)
            {
                var productStyle = _context.ProductStyles.FirstOrDefault(pc => pc.Name == source.style);
                if (productStyle != null)
                {
                    destination.StyleID = productStyle.Id;

                    return destination.StyleID;
                }
            }

            return 1;
        }
    }
    // // //
    public class SupplierNameResolver : IValueResolver<ProductToReturnDto, Product, Supplier>
    {
        private readonly StoreContext _context;

        public SupplierNameResolver(StoreContext context)
        {
            _context = context;
        }

        public Supplier Resolve(ProductToReturnDto source, Product destination, Supplier destMember, ResolutionContext context)
        {
            if (source.Supplier != null)
            {
                var productSupplier = _context.Supplier.FirstOrDefault(pc => pc.CompanyName == source.Supplier);
                if (productSupplier != null)
                {
                    destination.SupplierID = productSupplier.Id;
                    destination.supplier = productSupplier;
                    return destination.supplier;
                }
            }

            throw new NotImplementedException();
        }
    }

    public class SupplierIdValueResolver : IValueResolver<ProductToReturnDto, Product, int>
    {
        private readonly StoreContext _context;

        public SupplierIdValueResolver(StoreContext context)
        {
            _context = context;
        }
        public int Resolve(ProductToReturnDto source, Product destination, int destMember, ResolutionContext context)
        {
            if (source.Supplier != null)
            {
                var productSupplier = _context.Supplier.FirstOrDefault(pc => pc.CompanyName == source.Supplier);
                if (productSupplier != null)
                {
                    destination.SupplierID = productSupplier.Id;
                    
                    return destination.SupplierID;
                }
            }

            return 1;
        }
    }
    // // //
    public class DiscountValueResolver : IValueResolver<ProductToReturnDto, Product, Discount>
    {
        private readonly StoreContext _context;

        public DiscountValueResolver(StoreContext context)
        {
            _context = context;
        }

        public Discount Resolve(ProductToReturnDto source, Product destination, Discount destMember, ResolutionContext context)
        {
            if (source.Discount != null)
            {
                var productDiscount = _context.Discounts.FirstOrDefault(d => d.Discount_Percent == source.Discount.ToString());
                if (productDiscount != null)
                {
                    destination.DiscountID = productDiscount.Id;
                    destination.Discount = productDiscount;
                    return destination.Discount;
                }
            }

            throw new NotImplementedException();
        }
    }

    public class DiscountIdValueResolver : IValueResolver<ProductToReturnDto, Product, int>
    {
        private readonly StoreContext _context;

        public DiscountIdValueResolver(StoreContext context)
        {
            _context = context;
        }
        public int Resolve(ProductToReturnDto source, Product destination, int destMember, ResolutionContext context)
        {
            if (source.Discount != null)
            {
                var productDiscount = _context.Discounts.FirstOrDefault(d => d.Discount_Percent == source.Discount.ToString());
                if (productDiscount != null)
                {
                    destination.DiscountID = productDiscount.Id;

                    return destination.DiscountID;
                }
            }

            return 1;
        }
    }
    // /// ////
    public class TypeValueResolver : IValueResolver<ProductToReturnDto, Product, ProductType>
    {
        private readonly StoreContext _context;

        public TypeValueResolver(StoreContext context)
        {
            _context = context;
        }
        
        public ProductType Resolve(ProductToReturnDto source, Product destination, ProductType destMember, ResolutionContext context)
        {
            if (source.productType != null)
            {
                var productType = _context.ProductTypes.FirstOrDefault(d => d.Name == source.productType);
                if (productType != null)
                {
                    destination.ProductTypeId = productType.Id;
                    destination.productType = productType;
                    return destination.productType;
                }
            }

            throw new NotImplementedException();
        }
    }

    public class TypeIdValueResolver : IValueResolver<ProductToReturnDto, Product, int>
    {
        private readonly StoreContext _context;

        public TypeIdValueResolver(StoreContext context)
        {
            _context = context;
        }
        public int Resolve(ProductToReturnDto source, Product destination, int destMember, ResolutionContext context)
        {
            if (source.productType != null)
            {
                var productType = _context.ProductTypes.FirstOrDefault(d => d.Name == source.productType);
                if (productType != null)
                {
                    destination.ProductTypeId = productType.Id;
                    return destination.ProductTypeId;
                }
            }

            return 1;
        }
    }
    ////////
    public class BrandValueResolver : IValueResolver<ProductToReturnDto, Product, ProductBrand>
    {
        private readonly StoreContext _context;

        public BrandValueResolver(StoreContext context)
        {
            _context = context;
        }

        public ProductBrand Resolve(ProductToReturnDto source, Product destination, ProductBrand destMember, ResolutionContext context)
        {
            if (source.productBrand != null)
            {
                var productBrand = _context.ProductBrands.FirstOrDefault(d => d.Name == source.productBrand);
                if (productBrand != null)
                {
                    destination.ProductBrandId = productBrand.Id;
                    destination.productBrand = productBrand;
                    return destination.productBrand;
                }
            }

            throw new NotImplementedException();
        }
    }

    public class BrandIdValueResolver : IValueResolver<ProductToReturnDto, Product, int>
    {
        private readonly StoreContext _context;

        public BrandIdValueResolver(StoreContext context)
        {
            _context = context;
        }
        public int Resolve(ProductToReturnDto source, Product destination, int destMember, ResolutionContext context)
        {
            if (source.productBrand != null)
            {
                var productBrand = _context.ProductBrands.FirstOrDefault(d => d.Name == source.productBrand);
                if (productBrand != null)
                {
                    destination.ProductBrandId = productBrand.Id;
                    return destination.ProductBrandId;
                }
            }

            return 1;
        }
    }

    ///////
   




}
