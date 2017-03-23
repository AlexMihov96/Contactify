using System.Linq;
using DatabaseEntities.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Repository.Interfaces;
using WebServices.Interfaces;

namespace WebServices.Services
{
    public class AccountService : Service, IAccountService
    {
        private readonly RoleManager<IdentityRole> roleManager;

        public AccountService(IContactifyData data, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
            : base(data, userManager)
        {
            this.roleManager = roleManager;
        }

        public ApplicationUser ExtractCurrentUser(ApplicationUser user)
        {
            var currentUser = this.Data.ApplicationUser.Query().Include(u => u.User).FirstOrDefault(u => u.Id == user.Id);
            return currentUser;
        }
    }
}
