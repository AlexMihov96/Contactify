using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatabaseEntities.Entities;
using DataTransferObjects.InputModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using WebServices.Interfaces;

namespace WebServices.Services
{
    public class AccountService :  IAccountService
    {
//        private readonly RoleManager<IdentityRole> roleManager;
//
//        public AccountService(IVacationSystemData data, UserManager<User> userManager, RoleManager<IdentityRole<>> roleManager)
//            : base(data, userManager)
//        {
//            this.roleManager = roleManager;
//        }
//
//        public AspUser ExtractCurrentUser(AspUser user)
//        {
//            var currentUser = this.Data.AspUser.All().Include(u => u.VacationUser).FirstOrDefault(u => u.Id == user.Id);
//            return currentUser;
//        }
//
//        public async Task<IdentityResult> ChangePassword(ChangePasswordInputModel model)
//        {
//            this.CheckModelForNull(model);
//            var user = this.Data.AspUser.All().Include(x => x.VacationUser).FirstOrDefault(u => u.VacationUser.Id == model.Id);
//
//            var result = await this.UserManager.ChangePasswordAsync(user, model.CurrentPassword, model.NewPassword);
//            IdentityResult identResult = await this.UserManager.UpdateAsync(user);
//            return identResult;
//        }
//
//        public async Task<IdentityResult> ResetPassword(ResetPasswordInputModel model)
//        {
//
//            this.CheckModelForNull(model);
//            var user = this.Data.AspUser.All().Include(x => x.VacationUser).Include(z => z.VacationUser.ResetPassword).FirstOrDefault(u => u.VacationUser.ResetPassword.Guid == model.Guid);
//            var code = await this.UserManager.GeneratePasswordResetTokenAsync(user);
//            var result = await this.UserManager.ResetPasswordAsync(user, code, model.NewPassword);
//            return result;
//        }
//
//        public async Task<IdentityResult> RegisterUser(RegisterUserInputModel model)
//        {
//            this.CheckModelForNull(model);
//            var user = new AspUser { UserName = model.Username, Email = model.Email };
//            var result = await this.UserManager.CreateAsync(user, model.Password);
//
//            if (result.Succeeded)
//            {
//                var vacationUser = new VacationUser()
//                {
//                    Avatar = defUserAvatar,
//                    Fullname = model.Fullname,
//                    PositionId = model.PositionId,
//                    LocationId = model.LocationId,
//                    AspUser = user
//
//                };
//
//                this.Data.VacationUser.Add(vacationUser);
//                this.Data.SaveChanges();
//
//                if (model.IsAdmin)
//                {
//                    var adminRoleResult = await this.UserManager.AddToRoleAsync(user, "Administrator");
//
//                    if (!adminRoleResult.Succeeded)
//                    {
//                        throw new Exception(string.Join("; ", adminRoleResult.Errors));
//                    }
//                }
//            }
//
//            return result;
//        }
//
//        public bool ValidateUsername(string username)
//        {
//            var isAlreadyTaken = this.Data.AspUser.All()
//                .FirstOrDefault(u => u.UserName == username);
//
//            return isAlreadyTaken != null;
//        }
//
//        public bool ValidateEmail(string email)
//        {
//            var isAlreadyTaken = this.Data.AspUser.All()
//                .FirstOrDefault(u => u.Email == email);
//
//            return isAlreadyTaken != null;
//        }
        public ApplicationUser ExtractCurrentUser(ApplicationUser user)
        {
            throw new NotImplementedException();
        }

        public Task<IdentityResult> ChangePassword(ChangePasswordInputModel model)
        {
            throw new NotImplementedException();
        }

        public Task<IdentityResult> RegisterUser(RegisterUserInputModel model)
        {
            throw new NotImplementedException();
        }

        public Task<IdentityResult> ResetPassword(ResetPasswordInputModel model)
        {
            throw new NotImplementedException();
        }

        public bool ValidateUsername(string username)
        {
            throw new NotImplementedException();
        }

        public bool ValidateEmail(string email)
        {
            throw new NotImplementedException();
        }
    }
}
