using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Contactify.Entities.Models
{
    public class User
    {
        public User()
        {
            this.Messages = new List<Message>();
            this.SenderMessageHeader = new List<MessageHeader>();
            this.ReceiverMessageHeader = new List<MessageHeader>();
            this.Posts = new List<Post>();
        }

        [Key]
        [Column(Order = 1)]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        [Column(Order = 2)]
        public string Username { get; set; }

        [Required]
        [Column(Order = 3)]
        [StringLength(100), EmailAddress]
        public string Email { get; set; }

        [MaxLength(50)]
        [Column(Order = 4)]
        public string Firstname { get; set; }

        [MaxLength(50)]
        [Column(Order = 5)]
        public string Lastname { get; set; }

        [MaxLength(100)]
        [Column(Order = 6)]
        public string FullName { get; set; }

        [MaxLength(10000)]
        [Column(Order = 7)]
        public string ProfilePicture { get; set; }

        [Required]
        [MaxLength(450)]
        public string ApplicationUserId { get; set; }

        public virtual ICollection<Post> Posts { get; set; }

        public virtual ApplicationUser ApplicationUser { get; set; }

        public virtual ICollection<MessageHeader> SenderMessageHeader { get; set; }

        public virtual ICollection<MessageHeader> ReceiverMessageHeader { get; set; }

        public virtual ICollection<Message> Messages { get; set; }
    }
}
