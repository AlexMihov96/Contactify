using System.Linq;
using Contactify.DataLayer.Interfaces;
using Contactify.DataTransferObjects.ViewModels;
using Contactify.Entities.Models;
using Contactify.Services.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace Contactify.Services.Services
{
    public class UserService : Service, IUserService
    {
        public UserService(IContactifyData data, UserManager<ApplicationUser> userManager)
            : base(data, userManager)
        {
        }

        public IQueryable<UserViewModel> GetTopFiveFriendsByUserId(int userId)
        {
            throw new System.NotImplementedException();
        }
    }
}
