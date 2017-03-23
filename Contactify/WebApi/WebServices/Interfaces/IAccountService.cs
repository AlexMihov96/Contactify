using System.Threading.Tasks;
using DatabaseEntities.Entities;
using DataTransferObjects.InputModels;
using Microsoft.AspNetCore.Identity;

namespace WebServices.Interfaces
{
    public interface IAccountService
    {
        ApplicationUser ExtractCurrentUser(ApplicationUser user);

        Task<IdentityResult> ChangePassword(ChangePasswordInputModel model);

        Task<IdentityResult> RegisterUser(RegisterUserInputModel model);

        Task<IdentityResult> ResetPassword(ResetPasswordInputModel model);

        bool ValidateUsername(string username);

        bool ValidateEmail(string email);
    }
}
