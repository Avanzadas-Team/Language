using Server.Models;
using System.Collections.Generic;

namespace Server.PresentationModel
{
    public class UserFilter
    {
        public string Nombre { get; set; }
        public List<Idioma> IdiomasEns { get; set; }

        public List<Idioma> IdiomasApr { get; set; }

        public string porigen { get; set; }

        public int edad { get; set; }
    }
}
