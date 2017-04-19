using System.Threading.Tasks;

namespace Contactify.Services
{
    public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}
