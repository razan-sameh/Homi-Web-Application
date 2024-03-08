using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Identity
{
    //public class UserRoleStore<AppUser> : IUserRoleStore<AppUser> where AppUser : class
    //{
    //    private readonly RoleManager<AppUser> _roleManager;
    //    private readonly UserManager<AppUser> _userManager;


    //    public async Task AddToRoleAsync(AppUser user, string roleName, CancellationToken cancellationToken)
    //    {
    //        var role = await _roleManager.FindByNameAsync(roleName);
    //        if (role == null)
    //        {
    //            throw new InvalidOperationException($"Role '{roleName}' not found.");
    //        }

    //        // Add the user to the role.
    //        var result = await _userManager.AddToRoleAsync(user, roleName);

    //        if (!result.Succeeded)
    //        {
    //            throw new InvalidOperationException($"Failed to add user  to role '{roleName}'.");
    //        }

            
    //    }

    //    public Task<IdentityResult> CreateAsync(AppUser user, CancellationToken cancellationToken)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public Task<IdentityResult> DeleteAsync(AppUser user, CancellationToken cancellationToken)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public void Dispose()
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public Task<AppUser> FindByIdAsync(string userId, CancellationToken cancellationToken)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public Task<AppUser> FindByNameAsync(string normalizedUserName, CancellationToken cancellationToken)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public Task<string> GetNormalizedUserNameAsync(AppUser user, CancellationToken cancellationToken)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public Task<IList<string>> GetRolesAsync(AppUser user, CancellationToken cancellationToken)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public Task<string> GetUserIdAsync(AppUser user, CancellationToken cancellationToken)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public Task<string> GetUserNameAsync(AppUser user, CancellationToken cancellationToken)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public Task<IList<AppUser>> GetUsersInRoleAsync(string roleName, CancellationToken cancellationToken)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public Task<bool> IsInRoleAsync(AppUser user, string roleName, CancellationToken cancellationToken)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public Task RemoveFromRoleAsync(AppUser user, string roleName, CancellationToken cancellationToken)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public Task SetNormalizedUserNameAsync(AppUser user, string normalizedName, CancellationToken cancellationToken)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public Task SetUserNameAsync(AppUser user, string userName, CancellationToken cancellationToken)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public Task<IdentityResult> UpdateAsync(AppUser user, CancellationToken cancellationToken)
    //    {
    //        throw new NotImplementedException();
    //    }
    //}
}
