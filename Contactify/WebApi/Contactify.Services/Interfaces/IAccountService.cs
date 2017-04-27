using System.Threading.Tasks;
using Contactify.DataTransferObjects.InputModels;
using Contactify.Entities.Models;
using Microsoft.AspNetCore.Identity;

namespace Contactify.Services.Interfaces
{
    public interface IAccountService
    {
        ApplicationUser ExtractCurrentUser(ApplicationUser user);

        Task<IdentityResult> RegisterUser(RegisterUserInputModel model);

        bool ValidateUsername(string username);

        bool ValidateEmail(string email);

        bool ValidatePassword(string password, string confirmPassword);
    }
}
