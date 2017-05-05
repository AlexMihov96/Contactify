using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using Contactify.Entities.Models;

namespace Contactify.DataTransferObjects.ViewModels
{
    public class CreatedPostViewModel
    {
        public CreatedPostViewModel()
        {
            this.Likes = new List<Like>();
            this.Comments = new List<Comment>();
            this.Shares = new List<Share>();
        }

        public string Username { get; set; }

        public string Message { get; set; }

        public string Picture { get; set; }

        public string VideoUrl { get; set; }

        public DateTime CreationDate { get; set; }

        public int LikeCount { get; set; }

        public int CommentCount { get; set; }

        public int ShareCount { get; set; }

        public ICollection<Like> Likes { get; set; }

        public ICollection<Comment> Comments { get; set; }

        public ICollection<Share> Shares { get; set; }

        public static Expression<Func<Post, CreatedPostViewModel>> Bind
        {
            get
            {
                return p => new CreatedPostViewModel()
                {
                    Message = p.Message,
                    ShareCount = p.ShareCount,
                    CommentCount = p.CommentCount,
                    CreationDate = p.CreationDate,
                    LikeCount = p.LikeCount,
                    Picture = p.Picture,
                    VideoUrl = p.VideoUrl,
                    Likes = p.Likes,
                    Shares = p.Shares,
                    Comments = p.Comments,
                    Username = p.User.Username
                };
            }
        }
    }
}
