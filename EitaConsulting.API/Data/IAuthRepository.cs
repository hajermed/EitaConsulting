using System.Threading.Tasks;
using EitaConsulting.API.Models;

namespace EitaConsulting.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string password);
         Task<User> Login(string username, string password);
         Task<bool> LogUserExists(string username);
         
    }
}