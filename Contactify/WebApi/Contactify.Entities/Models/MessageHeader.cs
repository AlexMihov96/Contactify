using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Contactify.Entities.Models
{
    public class MessageHeader
    {
        [Key]
        public int Id { get; set; }

        [Required, StringLength(100)]
        public string Title { get; set; }

        [Required, Column(TypeName = "Date")]
        public DateTime TimeStamp { get; set; }

        [Required]
        public int StatusId { get; set; }

        [Required]
        public int SenderId { get; set; }

        [Required]
        public int ReceiverId { get; set; }

        public virtual User Sender { get; set; }

        public virtual User Receiver { get; set; }

        public virtual Status Status { get; set; }
    }
}
