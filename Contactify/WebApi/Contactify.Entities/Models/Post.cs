using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Contactify.Entities.Models
{
    public class Post
    {
        public Post()
        {
            this.Likes = new List<Like>();
            this.Comments = new List<Comment>();
            this.Shares = new List<Share>();
        }

        [Key]
        [Column(Order = 1)]
        public int Id { get; set; }

        [Required, MinLength(1), MaxLength(short.MaxValue)]
        [Column(Order = 2)]
        public string Message { get; set; }

        [Column(Order = 3)]
        public int LikeCount { get; set; }

        [Column(Order = 4)]
        public int CommentCount { get; set; }

        [Column(Order = 5)]
        public int ShareCount { get; set; }

        [Required, Column(Order = 6)]
        public DateTime CreationDate { get; set; }

        [StringLength(1000)]
        [Column(Order = 7)]
        public string Picture { get; set; }

        [Column(Order = 8)]
        public string VideoUrl { get; set; }

        public virtual ICollection<Like> Likes { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }

        public virtual ICollection<Share> Shares { get; set; }

        public int UserId { get; set; }

        public virtual User User { get; set; }
    }
}
