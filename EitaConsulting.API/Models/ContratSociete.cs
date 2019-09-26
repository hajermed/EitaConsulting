using System;
using System.ComponentModel.DataAnnotations;

namespace EitaConsulting.API.Models
{
    public class ContratSociete
    {
         public int ContratSocieteID { get; set; }
        [Required]
        public string Reference { get; set; }
        public string NomSociete { get; set; }
        public string Adresse { get; set; }
        public string Email { get; set; }
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime DateDebut { get; set; }
        public int DureeContrat { get; set; }
        public int DureePaiement { get; set; }
        public int DureeNonConcurrent { get; set; }
    }
}