using System.Threading.Tasks;

namespace Contactify.Services.Interfaces
{
    public interface IDatabaseInitializer
    {
        Task Seed();
    }
}
