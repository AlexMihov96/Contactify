using System;
using Contactify.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Contactify.Controllers
{
    [Route("api/user")]
    public class UserController : BaseController
    {
        private readonly IUserService userService;

        public UserController(IUserService userService)
        {
            this.userService = userService;
        }

        [HttpGet("get-top-five/{userId}")]
        public IActionResult GetTopFiveFriendsByUserId([FromRoute] int userId)
        {
            try
            {
                var result = this.userService.GetTopFiveFriendsByUserId(userId);

                return this.Ok(result);
            }
            catch (Exception e)
            {
                return this.BadRequest(e.Message);
            }
        }
    }
}
