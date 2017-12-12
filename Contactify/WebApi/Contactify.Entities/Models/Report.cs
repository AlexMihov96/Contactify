using System.ComponentModel.DataAnnotations;

namespace Contactify.Entities.Models
{
    public class Report
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MinLength(6), MaxLength(300)]
        public string Message { get; set; }

        public int UserId { get; set; }

        public virtual User User { get; set; }
    }
}
