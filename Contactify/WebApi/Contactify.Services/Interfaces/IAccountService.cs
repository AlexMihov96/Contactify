using Contactify.Entities.Models;

namespace Contactify.Services.Interfaces
{
    public interface IAccountService
    {
        ApplicationUser ExtractCurrentUser(ApplicationUser user);
    }
}
