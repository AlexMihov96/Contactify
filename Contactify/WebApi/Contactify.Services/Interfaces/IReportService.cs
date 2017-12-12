using Contactify.DataTransferObjects.InputModels;

namespace Contactify.Services.Interfaces
{
  public interface IReportService
    {
        ReportInputModel Store(ReportInputModel model);
    }
}
