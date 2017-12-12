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

        IRepository<Post> Post { get; }

        IRepository<Like> Likes { get; }

        IRepository<Comment> Comments { get; }

        IRepository<Share> Shares { get; }

        IRepository<ApplicationUser> ApplicationUser { get; }

        IRepository<Report> Reports { get; }

        int SaveChanges();

        int ExecuteSqlCommand(string command);
    }
}
