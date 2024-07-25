using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FirstAPISolvystix.Data;
using FirstAPISolvystix.Models;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace FirstAPISolvystix
{   
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController: Controller
    {
        private readonly IMongoCollection<Person> _db;
        public PersonController(MongoDbService mongoservice)
        {
            _db = mongoservice.Database.GetCollection<Person>("Person");
        }

        [HttpGet]
        public async Task<IEnumerable<Person>> Get()
        {
            return await _db.Find(FilterDefinition<Person>.Empty).ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Person>> GetById(string id)
        {
            var filter = Builders<Person>.Filter.Eq(x => x._id, id);
            var customer = _db.Find(filter).FirstOrDefault();
            return customer is not null ? Ok(customer) : NotFound();
        }

        [HttpPost]
        public async Task<ActionResult<Person>> CreatePerson([FromBody] Person person)
        {
            if (person == null)
            {
                return BadRequest("Person is null.");
            }

            // Log the received person object
            Console.WriteLine($"Received: Name = {person.Name}, Id = {person._id}, HasAccess = {person.HasAccess}");

            await _db.InsertOneAsync(person);
            return Ok($"Adding Successfully: {person.Name}, {person._id}, {person.HasAccess}");
        }

    }
}
