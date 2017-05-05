using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Contactify.Entities.Models
{
    public class Comment
    {
        public Comment()
        {
            this.Users = new HashSet<User>();
        }

        [Key]
        public int Id { get; set; }

        [Column(Order = 2)]
        public int PostId { get; set; }

        [Required, MaxLength(short.MaxValue)]
        [Column(Order = 3)]
        public string Message { get; set; }

        public virtual Post Post { get; set; }

        public virtual ICollection<User> Users { get; set; }
    }
}
