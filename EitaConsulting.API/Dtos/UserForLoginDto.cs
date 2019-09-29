using System.ComponentModel.DataAnnotations;

namespace EitaConsulting.API.Dtos
{
    public class UserForLoginDto
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}