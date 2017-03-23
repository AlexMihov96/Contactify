using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace DatabaseEntities.Entities
{
    public class ApplicationUser : IdentityUser
    {
        public virtual User User { get; set; }
    }
}
