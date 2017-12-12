using System;
using Contactify.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Contactify.DataTransferObjects.InputModels;
using Microsoft.AspNetCore.Authorization;

namespace Contactify.Controllers
{
    [Route("api/report")]
    public class ReportController : BaseController
    {
        private readonly IReportService reportService;

        public ReportController(IReportService reportService)
        {
            this.reportService = reportService;
        }

        [HttpPost("store")]
        public IActionResult Report([FromBody] ReportInputModel model)
        {
            try
            {
                var messageResponse = this.reportService.Store(model);

                return this.Ok(messageResponse);
            }
            catch (Exception e)
            {
                return this.BadRequest(e.Message);
            }
        }
    }
}
