using System;
using System.Collections.Generic;
using Contactify.DataLayer.Interfaces;
using Contactify.Entities;
using Contactify.Entities.Models;
using Microsoft.EntityFrameworkCore;

namespace Contactify.DataLayer
{
    public class ContactifyData : IContactifyData
    {
        private readonly ContactifyContext context;
        private readonly IDictionary<Type, object> repositories;

        public ContactifyData(ContactifyContext context)
        {
            this.context = context;
            this.repositories = new Dictionary<Type, object>();
        }

        public IRepository<User> User
        {
            get
            {
                return this.GetRepository<User>();
            }
        }

        public IRepository<Status> Status
        {
            get
            {
                return this.GetRepository<Status>();
            }
        }

        public IRepository<MessageHeader> MessageHeader
        {
            get
            {
                return this.GetRepository<MessageHeader>();
            }
        }

        public IRepository<Message> Message
        {
            get
            {
                return this.GetRepository<Message>();
            }
        }

        public IRepository<IpAddress> IpAddress
        {
            get
            {
                return this.GetRepository<IpAddress>();
            }
        }

        public IRepository<ApplicationUser> ApplicationUser
        {
            get
            {
                return this.GetRepository<ApplicationUser>();
            }
        }

        public int SaveChanges()
        {
            return this.context.SaveChanges();
        }

        public int ExecuteSqlCommand(string command)
        {
            return this.context.Database.ExecuteSqlCommand(command);
        }

        private IRepository<T> GetRepository<T>() where T : class
        {
            var type = typeof(T);

            if (!this.repositories.ContainsKey(type))
            {
                var typeOfRepository = typeof(Repository<T>);
                var repository = Activator.CreateInstance(typeOfRepository, this.context);

                this.repositories.Add(type, repository);
            }

            return (IRepository<T>)this.repositories[type];
        }
    }
}
