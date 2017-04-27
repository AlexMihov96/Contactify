using System;
using System.Linq;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Contactify.Controllers
{
    public class BaseController : Controller
    {
        protected string ExtractModelErrors(ModelStateDictionary modelState)
        {
            var errors = this.ModelState.Where(s => s.Value.ValidationState == ModelValidationState.Invalid)
                .Select(e => e.Value.Errors.Select(er => er.ErrorMessage).FirstOrDefault());

            var errorMessages = new StringBuilder();

            foreach (var error in errors)
            {
                errorMessages.AppendFormat("{0}{1}", error, Environment.NewLine);
            }

            return errorMessages.ToString();
        }
    }
}
