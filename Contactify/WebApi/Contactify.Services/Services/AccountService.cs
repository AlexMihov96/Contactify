using System;
using System.Linq;
using System.Text.RegularExpressions;
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
            //TODO: Profile picture, response if registration exists
            this.CheckModelForNull(model);

            if (this.ValidateEmail(model.Email) && this.ValidateUsername(model.Username))
            {
                var user = new ApplicationUser() { UserName = model.Username, Email = model.Email };
                var result = await this.UserManager.CreateAsync(user, model.Password);

                if (result.Succeeded)
                {
                    var vacationUser = new User()
                    {
                        Username = model.Username,
                        ProfilePicture = null,
                        Email = model.Email,
                        ApplicationUser = user
                    };

                    this.Data.User.Add(vacationUser);
                    this.Data.SaveChanges();

                    return result;
                }

                throw new Exception(string.Join("; ", result.Errors));
            }

            throw new Exception("Invalid data.");
        }

        public bool ValidateUsername(string username)
        {
            var isUsernameDuplicated = this.Data.User.Query()
                .Any(u => u.Username == username);

            if (!isUsernameDuplicated)
            {
                return true;
            }
            return false;
        }

        public bool ValidateEmail(string email)
        {
            var isAlreadyTaken = this.Data.ApplicationUser.Query()
                .Any(u => u.Email == email);

            var isValidEmail = Regex.IsMatch(email,
                "^(?(\")(\".+?(?<!\\\\)\"@)|(([0-9a-z]((\\.(?!\\.))|[-!#\\$%&\'\\*\\+/=\\?\\^`\\{\\}\\|~\\w])*)(?<=[0-9a-z])@))(?(\\[)(\\[(\\d{1,3}\\.){3}\\d{1,3}\\])|(([0-9a-z][-\\w]*[0-9a-z]*\\.)+[a-z0-9][\\-a-z0-9]{0,22}[a-z0-9]))$");

            if (!isAlreadyTaken && isValidEmail)
            {
                return true;
            }
            return false;
        }

        public bool ValidatePassword(string password, string confirmPassword)
        {
            if (!this.Data.ApplicationUser.Query().Any(u => u.UserName == "admin"))
            {
                return true;
            }
            else if (password == confirmPassword)
            {
                return true;
            }

            return false;
        }
    }
}
