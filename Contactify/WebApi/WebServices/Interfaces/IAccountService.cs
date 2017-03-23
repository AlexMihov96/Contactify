using DatabaseEntities.Entities;

namespace WebServices.Interfaces
{
    public interface IAccountService
    {
        ApplicationUser ExtractCurrentUser(ApplicationUser user);
    }
}
