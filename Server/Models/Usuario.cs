using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;

namespace Server.Models
{
    public class Usuario
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("Nombre")]
        public string Nombre { get; set; }

        [BsonElement("Edad")]
        public int Edad { get; set; }

        [BsonElement("Sexo")]
        public string Sexo { get; set; }

        [BsonElement("POrigen")]
        public string POrigen { get; set; }

        [BsonElement("IdiomasApr")]
        public List<Idioma> IdiomasApr { get; set; }

        [BsonElement("Hobbies")]
        public List<String> Hobbies { get; set; }

        [BsonElement("MedioPrac")]
        public List<String> MedioPrac { get; set; }

        [BsonElement("TipoU")]
        public int TipoU { get; set; }

        [BsonElement("IdiomasEns")]
        public List<String> IdiomasEns { get; set; }


    }
}
