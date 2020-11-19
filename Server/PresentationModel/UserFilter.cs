using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.PresentationModel
{
    public class UserFilter
    {
        public string Nombre { get; set; }
        public List<Idioma> IdiomasEns { get; set; }

        public List<Idioma> IdiomasApr { get; set; }
    }
}
