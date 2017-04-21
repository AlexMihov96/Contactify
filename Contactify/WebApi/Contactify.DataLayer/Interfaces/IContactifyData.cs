using Contactify.Entities.Models;

namespace Contactify.DataLayer.Interfaces
{
    public interface IContactifyData
    {
        IRepository<User> User { get; }

        IRepository<ApplicationUser> ApplicationUser { get; }

        int SaveChanges();

        int ExecuteSqlCommand(string command);
    }
}
