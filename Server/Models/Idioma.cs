using MongoDB.Bson.Serialization.Attributes;

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
