using Contactify.Entities.Models;

namespace Contactify.DataLayer.Interfaces
{
    public interface IContactifyData
    {
        IRepository<User> User { get; }

        IRepository<Status> Status { get; }

        IRepository<MessageHeader> MessageHeader { get; }

        IRepository<Message> Message { get; }

        IRepository<IpAddress> IpAddress { get; }

        IRepository<ApplicationUser> ApplicationUser { get; }

        int SaveChanges();

        int ExecuteSqlCommand(string command);
    }
}
