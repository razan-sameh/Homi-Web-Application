using Core.Models;
using Core.Models.OrderAggregate;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using System.Reflection.Emit;

namespace Infrastructure.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        {

        }
        public DbSet<Product>  Products {get; set;}
        public DbSet<ProductType> ProductTypes { get; set; }

        public DbSet<ProductBrand> ProductBrands { get; set; }
        public DbSet<Color> ProductColors { get; set; }
        public DbSet<Style> ProductStyles { get; set; }

        public DbSet<Discount> Discounts { get; set; }

        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItem { get; set; }

        public DbSet<DeliveryMethod> DeliveryMethod { get; set; }

        public DbSet<Supplier> Supplier { get; set; }

        public DbSet<Review> Reviews { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Product>().HasOne(b => b.productBrand).WithMany().HasForeignKey(o => o.ProductBrandId);
            builder.Entity<Product>().HasOne(b => b.productType).WithMany().HasForeignKey(o => o.ProductTypeId);
            builder.Entity<Product>().HasOne(b => b.color).WithMany().HasForeignKey(o => o.ColorID);
            builder.Entity<Product>().HasOne(b => b.style).WithMany().HasForeignKey(o => o.StyleID);
            //base.OnModelCreating(builder);
            //builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            builder.Entity<AddressForOrders>().HasNoKey();

            builder.Entity<Review>()
            .HasOne(r => r.Product)
            .WithMany(p => p.Reviews)
            .HasForeignKey(r => r.ProductId)
            .OnDelete(DeleteBehavior.Cascade);


        }

    }
}
