using Core.Identity;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Ali",
                    Email = "Ali22@test.com",
                    UserName = "Ali22@test.com",
                    Address = new Address
                    {
                        FirstName = "Ali",
                        LastName = "Ahmed",
                        Street = "10 nozha street",
                        City = "cairo",
                        State = "EG",
                        Zipcode = "90210"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}
