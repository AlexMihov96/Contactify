using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Contactify.Entities.Models
{
    public class Message
    {
        [Key]
        public int Id { get; set; }

        [Required, MaxLength(100)]
        public string Content { get; set; }

        public bool IsRead { get; set; }

        [Required, Column(TypeName = "Date")]
        public DateTime TimeStamp { get; set; }

        public int MessageHeaderId { get; set; }

        public virtual MessageHeader MessageHeader { get; set; }
    }
}
