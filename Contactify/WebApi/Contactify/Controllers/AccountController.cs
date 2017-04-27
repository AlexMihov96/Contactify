using System;
using System.Threading.Tasks;
using Contactify.DataTransferObjects.InputModels;
using Contactify.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Contactify.Controllers
{
    [Route("api/account")]
    public class AccountController : BaseController
    {
        private readonly IAccountService accountService;

        public AccountController(IAccountService accountService)
        {
            this.accountService = accountService;
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<IActionResult> Register([FromBody] RegisterUserInputModel registerModel)
        {
            if (!this.ModelState.IsValid)
            {
                var errors = this.ExtractModelErrors(this.ModelState);

                return this.BadRequest(errors);
            }

            try
            {
                var response = await this.accountService.RegisterUser(registerModel);

                if (!response.Succeeded)
                {
                    this.AddErrors(response);

                    return this.BadRequest(this.ModelState);
                }

                return this.Ok();
            }
            catch (Exception ex)
            {
                return this.BadRequest(ex.Message);
            }
        }

        private void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                this.ModelState.AddModelError(string.Empty, error.Description);
            }
        }
    }
}
