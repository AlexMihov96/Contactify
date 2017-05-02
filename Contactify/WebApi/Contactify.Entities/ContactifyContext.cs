using Contactify.Entities.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Contactify.Entities
{
    public class ContactifyContext : IdentityDbContext<ApplicationUser>
    {
        public ContactifyContext(DbContextOptions<ContactifyContext> options)
            : base(options)
        {
        }

        public DbSet<User> User { get; set; }

        public DbSet<MessageHeader> MessageHeader { get; set; }

        public DbSet<Status> Status { get; set; }

        public DbSet<IpAddress> IpAddress { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>()
                .HasIndex(u => u.Email)
                .IsUnique();

            modelBuilder.Entity<MessageHeader>()
                .HasOne(m => m.Sender)
                .WithMany(m => m.SenderMessageHeader)
                .HasForeignKey(m => m.SenderId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<MessageHeader>()
                .HasOne(m => m.Receiver)
                .WithMany(m => m.ReceiverMessageHeader)
                .HasForeignKey(m => m.ReceiverId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
