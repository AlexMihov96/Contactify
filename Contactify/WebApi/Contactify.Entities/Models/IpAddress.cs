using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Contactify.Entities.Models
{
    public class IpAddress
    {
        [Key]
        public int Id { get; set; }

        [Column(Order = 2)]
        public int UserId { get; set; }

        [Column(Order = 3)]
        public string Ip { get; set; }

        [Column(Order = 4)]
        public string Location { get; set; }

        public virtual User User { get; set; }
    }
}
