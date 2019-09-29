using System.ComponentModel.DataAnnotations;

namespace EitaConsulting.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required(ErrorMessage = "Nom d'utilsateur est obligatoire")]
        public string Username { get; set; }   
        [Required(ErrorMessage = "Le mot de passe est obligatoire")] 
        [StringLength(8,MinimumLength =4,ErrorMessage="Le {0} doit comporter au moins {2} et au maximum {1} caractères.")]       
        public string Password { get; set; }
    }
}