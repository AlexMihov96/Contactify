﻿using System.ComponentModel.DataAnnotations;

namespace Contactify.Entities.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Firstname { get; set; }

        [Required]
        [MaxLength(50)]
        public string Lastname { get; set; }

        [Required]
        [StringLength(100), EmailAddress]
        public string Email { get; set; }

        [MaxLength(10000)]
        public string ProfilePicture { get; set; }

        [Required]
        [MaxLength(450)]
        public string ApplicationUserId { get; set; }

        public virtual ApplicationUser ApplicationUser { get; set; }
    }
}