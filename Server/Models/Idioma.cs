using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models
{
    public class Idioma
    {
        [BsonElement("INombre")]
        public string INombre { get; set; }

        [BsonElement("NivelC")]
        public int NivelC { get; set; }
    }
}
