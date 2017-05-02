using System.ComponentModel.DataAnnotations;

namespace Contactify.Entities.Models
{
    public class IpAddress
    {
        [Key]
        public int Id { get; set; }

        public string Ip { get; set; }

        public string Location { get; set; }

        public int UserId { get; set; }

        public virtual User User { get; set; }
    }
}
