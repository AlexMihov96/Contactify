using System;
using System.Linq;
using System.Threading.Tasks;
using Contactify.DataLayer.Interfaces;
using Contactify.DataTransferObjects.InputModels;
using Contactify.Entities.Models;
using Contactify.Services.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Contactify.Services.Services
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

        public async Task<IdentityResult> RegisterUser(RegisterUserInputModel model)
        {
            //TODO: Profile picture
            this.CheckModelForNull(model);

            var user = new ApplicationUser() { UserName = model.Username, Email = model.Email };
            var result = await this.UserManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                var vacationUser = new User()
                {
                    Firstname = model.Firstname,
                    Lastname = model.Lastname,
                    FullName = $"{model.Firstname} {model.Lastname}",
                    Username = model.Username,
                    ProfilePicture = null,
                    Email = model.Email,
                    ApplicationUser = user,
                };

                this.Data.User.Add(vacationUser);
                this.Data.SaveChanges();
            }

            return result;
        }

        public bool ValidateUsername(string username)
        {
            var isAlreadyTaken = this.Data.ApplicationUser.Query()
                .FirstOrDefault(u => u.UserName == username);

            return isAlreadyTaken != null;
        }

        public bool ValidateEmail(string email)
        {
            var isAlreadyTaken = this.Data.ApplicationUser.Query()
                .FirstOrDefault(u => u.Email == email);

            return isAlreadyTaken != null;
        }
    }
}
