using System;
using Contactify.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Contactify.Controllers
{
    [Route("api/post")]
    public class PostController : BaseController
    {
        private readonly IPostService postService;

        public PostController(IPostService postService)
        {
            this.postService = postService;
        }

        [HttpPost("create-post/{userId}")]
        public IActionResult CreatePost([FromBody]string postMessage, int userId)
        {
            try
            {
                var createdPost = this.postService.CreatePost(postMessage, userId);

                return this.Ok(createdPost);
            }
            catch (Exception e)
            {
                return this.BadRequest(e.Message);
            }
        }

        [HttpGet("get-ten-latest-posts")]
        public IActionResult GetTenLatestPosts()
        {
            try
            {
                var latestPosts = this.postService.GetTenLatestPosts();

                return this.Ok(latestPosts);
            }
            catch (Exception e)
            {
                return this.BadRequest(e.Message);
            }
        }
    }
}
