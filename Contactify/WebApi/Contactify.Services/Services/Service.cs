using System;
using System.Linq;
using Contactify.DataLayer.Interfaces;
using Contactify.Entities.Models;
using Microsoft.AspNetCore.Identity;

namespace Contactify.Services.Services
{
    public abstract class Service
    {
        protected Service(IContactifyData data, UserManager<ApplicationUser> userManager)
        {
            this.Data = data;
            this.UserManager = userManager;
        }

        protected IContactifyData Data { get; set; }

        protected UserManager<ApplicationUser> UserManager { get; set; }

        protected void CheckModelForNull(object model)
        {
            if (model == null)
            {
                throw new ArgumentNullException(nameof(model), "The input model cannot be null");
            }
        }

        protected string GetUsernameById(int userId)
        {
            return this.Data.User.Query().FirstOrDefault(u => u.Id == userId).Username;
        }
    }
}
