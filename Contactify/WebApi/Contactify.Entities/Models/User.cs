using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Contactify.Entities.Models
{
    public class User
    {
        public User()
        {
            this.Messages = new List<Message>();
            this.SenderMessageHeader = new List<MessageHeader>();
            this.ReceiverMessageHeader = new List<MessageHeader>();
        }

        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Firstname { get; set; }

        [Required]
        [MaxLength(50)]
        public string Lastname { get; set; }

        [Required]
        [MaxLength(100)]
        public string FullName { get; set; }

        [Required]
        [MaxLength(50)]
        public string Username { get; set; }

        [Required]
        [StringLength(100), EmailAddress]
        public string Email { get; set; }

        [MaxLength(10000)]
        public string ProfilePicture { get; set; }

        [Required]
        [MaxLength(450)]
        public string ApplicationUserId { get; set; }

        public virtual ApplicationUser ApplicationUser { get; set; }

        public virtual ICollection<MessageHeader> SenderMessageHeader { get; set; }

        public virtual ICollection<MessageHeader> ReceiverMessageHeader { get; set; }

        public virtual ICollection<Message> Messages { get; set; }
    }
}
