using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Contactify.Entities.Models
{
    public class Like
    {
        public Like()
        {
            this.Users = new HashSet<User>();
        }

        [Key]
        public int Id { get; set; }

        public int PostId { get; set; }

        public virtual Post Post { get; set; }

        public virtual ICollection<User> Users { get; set; }
    }
}
