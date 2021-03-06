﻿using System.Linq;
using Contactify.Entities;

namespace Contactify.DataLayer.Interfaces
{
    public interface IRepository<T>
    {
        IQueryable<T> Query();

        T Find(object id);

        void Add(T entity);

        void Dispose(ContactifyContext context);

        void Update(T entity);

        void Delete(T entity);

        int SaveChanges();
    }
}
