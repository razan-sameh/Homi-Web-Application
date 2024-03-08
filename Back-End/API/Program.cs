
using API.Helpers;
using API.Middleware;
using Core.Identity;
using Core.Interfaces;
using Core.Models;
using Infrastructure.Data;
using Infrastructure.Data.Repositories;
using Infrastructure.Identity;
using Infrastructure.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using NUnit.Framework.Constraints;
using StackExchange.Redis;
using Stripe;
using System.Text;

namespace API
{
    public class Program
    {
        public async static Task Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();


            
            builder.Services.AddDbContext<StoreContext>(opt =>
            {
                opt.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));

            });

            builder.Services.AddDbContext<AppIdentityDbContext>(opt =>
            {
                opt.UseSqlServer(builder.Configuration.GetConnectionString("IdentityConnection"));
            });

            builder.Services.AddIdentityCore<AppUser>(opt =>
            {

            })
                .AddEntityFrameworkStores<AppIdentityDbContext>()
                .AddSignInManager<SignInManager<AppUser>>();

            var jwt = builder.Configuration.GetSection("Token");

            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options=>
                {
                    options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwt["Key"])),
                        ValidIssuer = jwt["Issuer"],
                        ValidateIssuer = true,
                        ValidateAudience = false
                    };
                });



            // Add the custom store to the services collection.
            //builder.Services.AddScoped<IUserRoleStore<AppUser>, UserRoleStore<AppUser>>();

            // Configure Identity with the custom store.
            builder.Services.AddIdentity<AppUser, IdentityRole>()
                .AddUserStore<UserStore<AppUser, IdentityRole, AppIdentityDbContext>>()
                .AddRoleStore<RoleStore<IdentityRole, AppIdentityDbContext>>()
                .AddDefaultTokenProviders()
                .AddEntityFrameworkStores<AppIdentityDbContext>();

            // Add other services and middleware as needed.
            

            //////

            builder.Services.AddAuthorization();

            builder.Services.AddSingleton<IConnectionMultiplexer>(c =>
            {
                var options = ConfigurationOptions.Parse(builder.Configuration.GetConnectionString("Redis"));
                return ConnectionMultiplexer.Connect(options);
            }); //el redis Shaghal Singelton

            builder.Services.AddScoped<IReviewService, Infrastructure.Services.ReviewService>();
            builder.Services.AddScoped<IwishListRepository, WishListRepository>();
            builder.Services.AddScoped<ICartRepository, CartRepository>();
            builder.Services.AddScoped<IProductRepository,ProductRepository>();
            builder.Services.AddScoped<IOrderService, OrderService>();
            builder.Services.AddScoped<IUnitOfWork,UnitOfWork>();
            builder.Services.AddScoped<ITokenService, Infrastructure.Services.TokenService>();
            builder.Services.AddScoped<IProductTypeRepository, ProductTypeRepository>();
            builder.Services.AddScoped<UnitOfWork>();
            builder.Services.AddScoped<GenericRepo<ProductBrand>>();
            builder.Services.AddScoped<IPaymentService, PaymentService>();
            builder.Services.AddScoped<IGenericRepository<Core.Models.Product>, GenericRepo<Core.Models.Product>>();
            builder.Services.AddLogging();
            //loggerFactory.AddConsole(LogLevel.Error);
            //loggerFactory.AddFile("logs/myapp-{Date}.txt", LogLevel.Error);

            //builder.Services.AddAutoMapper(typeof(MappingProfiles));


            builder.Services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Next Driven Api", Version = "v1" });
                c.ResolveConflictingActions(x => x.First());
                c.AddSecurityDefinition("Bearer", new Microsoft.OpenApi.Models.OpenApiSecurityScheme
                {
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer",
                    BearerFormat = "JWT",
                    In = ParameterLocation.Header,
                    Description = "JWT Authorization header using the Bearer scheme. Example: \"bearer {token}\"",
                });
                c.AddSecurityRequirement(new OpenApiSecurityRequirement()
                {
                    {
                        new OpenApiSecurityScheme()
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer",
                            },
                            Name="Bearer",
                            In = ParameterLocation.Header,
                        },
                        new string[] {}
                    }
            });
            });


            // we used typeof caue wh dont know the TYPE of T as its Generic
            //y3ni b2olo ay 7aga mn Type IGenericRepo and GenericRepo
            builder.Services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepo<>));
            builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
            ////for angular
            //builder.Services.AddCors(options =>
            //{
            //    options.AddPolicy("AllowOrigin",
            //        builder => builder
            //            .WithOrigins("http://localhost:52548") // specify the allowed origins
            //            .AllowAnyHeader()
            //            .AllowAnyMethod());
            //});
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigins",
                    builder =>
                    {
                        builder.WithOrigins("http://localhost:4200")
                               .AllowAnyHeader()
                               .AllowAnyMethod();
                    });
            });
            //services.AddCors(options =>
            //{
            //    options.AddPolicy("AllowOrigin",
            //        builder => builder
            //            .WithOrigins("http://localhost:52548") // specify the allowed origins
            //            .AllowAnyHeader()
            //            .AllowAnyMethod());
            //});

            var app = builder.Build();
            //app.UseCors("CorsPolicy");
            app.UseCors("AllowSpecificOrigins");
            app.UseCorsMiddleware();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseMiddleware<ExceptionMiddleware>();
            app.UseStatusCodePagesWithReExecute("/errors/{0}");

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseAuthentication();
            app.UseRouting();
            app.UseAuthorization();

            app.Use(async (context, next) =>
            {
                if (!context.User.Identity.IsAuthenticated)
                {
                    var authResult = await context.AuthenticateAsync();
                    if (!authResult.Succeeded)
                    {
                        // Log the authentication error
                        Console.WriteLine("error");
                    }
                }

                await next();
            });




            app.MapControllers();

            //3shan bdl ma a3ml migration w a3ml update lel DB kol shwia
            //Fa hena bn2ollo law fe Migration msh m3mlo Update --> Fa asna2 el app ma bybd2 e3ml generate lel migration da

            using var scope=app.Services.CreateScope();
            var Services = scope.ServiceProvider;
            var context=Services.GetRequiredService<StoreContext>();

            //seed the identity
            var identityContext=Services.GetRequiredService<AppIdentityDbContext>();
            var userManager=Services.GetRequiredService<UserManager<AppUser>>();


            var Logger=Services.GetRequiredService<ILogger<Program>>();
            try
            {
                await context.Database.MigrateAsync();

                //seeding Identity
                await identityContext.Database.MigrateAsync();

                //seeding data to database from json Files(we don't have json files yet, I Wrote the code without paths)
                await StoreContextSeed.SeedAsync(context);

                //seeding identity
                await AppIdentityDbContextSeed.SeedUsersAsync(userManager);
            }
            catch (Exception ex)
            {

                Logger.LogError(ex, "Error occured whilr migrating Process");
            }


            app.Run();
        }
    }
}