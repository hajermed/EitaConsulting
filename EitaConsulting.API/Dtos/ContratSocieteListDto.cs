using System;

namespace EitaConsulting.API.Dtos
{
    public class ContratSocieteListDto
    {
        public int ContratSocieteID { get; set; }
        public string Reference { get; set; }
        public string NomSociete { get; set; }
        public string Adresse { get; set; }
        public string Email { get; set; }
        public DateTime DateDebut { get; set; }
        public int DureeContrat { get; set; }
        public int DureePaiement { get; set; }
        public int DureeNonConcurrent { get; set; }
    }
}