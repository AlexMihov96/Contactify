using System;
using System.Collections.Generic;
using DatabaseEntities;
using DatabaseEntities.Entities;
using Microsoft.EntityFrameworkCore;
using Repository.Interfaces;

namespace Repository
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
