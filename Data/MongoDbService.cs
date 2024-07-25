using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace FirstAPISolvystix.Data
{
    public class MongoDbService
    {
        private readonly IConfiguration _config;
        private readonly IMongoDatabase _database;
        public MongoDbService(IConfiguration config)
        {
            _config = config;

            var connectionString = _config.GetConnectionString("dbConnectionString");
            var mongourl = MongoUrl.Create(connectionString);
            var mongoClient = new MongoClient(mongourl);
            _database = mongoClient.GetDatabase("Solvytix");
        }
        public IMongoDatabase Database => _database;
    }
}
