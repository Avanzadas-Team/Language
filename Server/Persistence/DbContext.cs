using System;
using MongoDB.Driver;
using System.Collections.Generic;

namespace Server.Persistence
{
    public class DbContext : IDbContext
    {
        private readonly IMongoCollection<Object> _Data;

        public DbContext(IDatabaseSettings settings)
        {
            string connectionString = Environment.GetEnvironmentVariable("MONGODB_CONNECTION_STRING");
            var client = new MongoClient(connectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _Data = database.GetCollection<Object>(settings.CollectionName);
        }

        public List<Object> Get() =>
            _Data.Find(Object => true).ToList();

        public Object Get(string id) =>
            _Data.Find<Object>(Object => Object.Id == id).FirstOrDefault();

        public Object Create(Object Object)
        {
            _Data.InsertOne(Object);
            return Object;
        }

        public void Update(string id, Object ObjectIn) =>
            _Data.ReplaceOne(Object => Object.Id == id, ObjectIn);

        public void Remove(Object ObjectIn) =>
            _Data.DeleteOne(Object => Object.Id == ObjectIn.Id);

        public void Remove(string id) =>
            _Data.DeleteOne(Object => Object.Id == id);
    }
}