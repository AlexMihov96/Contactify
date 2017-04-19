using System.Threading.Tasks;

namespace Contactify.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
