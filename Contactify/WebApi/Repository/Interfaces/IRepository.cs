using System.Linq;
using DatabaseEntities;

namespace Repository.Interfaces
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
