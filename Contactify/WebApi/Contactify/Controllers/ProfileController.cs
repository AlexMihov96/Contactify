using System;
using Contactify.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Contactify.Controllers
{
    [Route("api/profile")]
    public class UserController : BaseController
    {
        private readonly IProfileService profileService;

        public UserController(IProfileService profileService)
        {
            this.profileService = profileService;
        }

        [HttpGet("get-user-info/{userId}")]
        public IActionResult GetUserInfo([FromRoute] int userId)
        {
            try
            {
                var userInfo = this.profileService.GetUserInfo(userId);

                return this.Ok(userInfo);
            }
            catch (Exception e)
            {
                return this.BadRequest(e.Message);
            }
        }
    }
}
