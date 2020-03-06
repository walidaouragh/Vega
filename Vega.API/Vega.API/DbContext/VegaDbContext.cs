using Microsoft.EntityFrameworkCore;
using Vega.API.Models;

namespace Vega.API.DbContext
{
    public class VegaDbContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public DbSet<Vehicle> Vehicles { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Feature> Features { get; set; }

        public VegaDbContext(DbContextOptions<VegaDbContext> options) : base(options)
        {

        }
    }
}