using Microsoft.EntityFrameworkCore;

namespace DatabaseEntities
{
    public class ContactifyContext : DbContext
    {
        public ContactifyContext(DbContextOptions options)
            : base(options)
        {
        }
    }
}