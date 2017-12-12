using Contactify.DataLayer.Interfaces;
using Contactify.DataTransferObjects.InputModels;
using Contactify.Entities.Models;
using Contactify.Services.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace Contactify.Services.Services
{
    public class ReportService : Service, IReportService
    {
        public ReportService(IContactifyData data, UserManager<ApplicationUser> userManager) : base(data, userManager)
        {
        }

        public ReportInputModel Store(ReportInputModel model)
        {
            this.CheckModelForNull(model);

            var report = new Report
            {
                Message = model.Message,
                UserId = model.UserId
            };

            this.Data.Reports.Add(report);
            this.Data.SaveChanges();

            return model;
        }
    }
}
