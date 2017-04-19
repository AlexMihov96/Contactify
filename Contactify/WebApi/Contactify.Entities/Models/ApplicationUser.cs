using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Contactify.Entities.Models
{
    public class ApplicationUser : IdentityUser
    {
        public virtual User User { get; set; }
    }
}
