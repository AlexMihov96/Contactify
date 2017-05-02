using System.Linq;
using Contactify.DataTransferObjects.ViewModels;

namespace Contactify.Services.Interfaces
{
    public interface IUserService
    {
        IQueryable<UserViewModel> GetTopFiveFriendsByUserId(int userId);
    }
}
