using MongoDB.Driver;
using Server.Models;
using Server.Persistence;
using System.Collections.Generic;
using System.Linq;

namespace Server.Services
{
    public class UserContext
    {
        private readonly IMongoCollection<Usuario> _users;

        public UserContext(IDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _users = database.GetCollection<Usuario>(settings.CollectionName);
        }

        public List<Usuario> Get() =>
            _users.Find(user => true).ToList();

        public Usuario Get(string id) =>
            _users.Find<Usuario>(user => user.Id == id).FirstOrDefault();

        public Usuario Create(Usuario user)
        {
            _users.InsertOne(user);
            return user;
        }

        public void Update(string id, Usuario userIn) =>
            _users.ReplaceOne(user => user.Id == id, userIn);

        public void Remove(Usuario userIn) =>
            _users.DeleteOne(user => user.Id == userIn.Id);

        public void Remove(string id) =>
            _users.DeleteOne(user => user.Id == id);

    }
}
