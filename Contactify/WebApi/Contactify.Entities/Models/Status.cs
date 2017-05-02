using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Contactify.Entities.Models
{
    public class Status
    {
        public Status()
        {
            this.MessageHeaders = new HashSet<MessageHeader>();
        }

        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public byte Id { get; set; }

        [Required, MaxLength(20)]
        public string Message { get; set; }

        public virtual ICollection<MessageHeader> MessageHeaders { get; set; }
    }
}