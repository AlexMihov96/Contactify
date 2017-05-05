using Contactify.DataTransferObjects.ViewModels;

namespace Contactify.Services.Interfaces
{
    public interface IProfileService
    {
        UserViewModel GetUserInfo(int userId);
    }
}
