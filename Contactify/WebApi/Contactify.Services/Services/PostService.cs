using System;
using System.Linq;
using Contactify.DataLayer.Interfaces;
using Contactify.DataTransferObjects.ViewModels;
using Contactify.Entities.Models;
using Contactify.Services.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace Contactify.Services.Services
{
    public class PostService : Service, IPostService
    {
        public PostService(IContactifyData data, UserManager<ApplicationUser> userManager)
            : base(data, userManager)
        {
        }

        public IQueryable<CreatedPostViewModel> CreatePost(string postMessage, int userId)
        {
            base.CheckModelForNull(postMessage);

            var post = new Post()
            {
                CreationDate = DateTime.Now,
                Message = postMessage,
                UserId = userId,
            };

            this.Data.Post.Add(post);
            this.Data.SaveChanges();

            var createdPost = this.Data.Post.Query().OrderByDescending(p => p.Id).Select(CreatedPostViewModel.Bind);

            return createdPost;
        }

        public IQueryable<CreatedPostViewModel> GetTenLatestPosts()
        {
            var latestPosts = this.Data.Post.Query()
                .OrderByDescending(p => p.Id)
                .Select(CreatedPostViewModel.Bind);

            return latestPosts;
        }
    }
}
