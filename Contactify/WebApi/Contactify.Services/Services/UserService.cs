using System.Linq;
using Contactify.DataLayer.Interfaces;
using Contactify.DataTransferObjects.ViewModels;
using Contactify.Entities.Models;
using Contactify.Services.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace Contactify.Services.Services
{
    public class ProfileService : Service, IProfileService
    {
        public ProfileService(IContactifyData data, UserManager<ApplicationUser> userManager)
            : base(data, userManager)
        {
        }

        public UserViewModel GetUserInfo(int userId)
        {
            var userInfo = this.Data.User.Query().FirstOrDefault(u => u.Id == userId);

            var userViewModel = new UserViewModel()
            {
                Username = userInfo.Username,
                Email = userInfo.Email,
                ProfilePicture = userInfo.ProfilePicture
            };

            return userViewModel;
        }
    }
}