using System.Linq;
using Contactify.DataTransferObjects.ViewModels;

namespace Contactify.Services.Interfaces
{
    public interface IPostService
    {
        CreatedPostViewModel CreatePost(string postMessage, int userId);

        IQueryable<CreatedPostViewModel> GetAllPosts();
    }
}
