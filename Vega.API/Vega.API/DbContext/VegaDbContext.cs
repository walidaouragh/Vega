using Microsoft.EntityFrameworkCore;
using Vega.API.Models;

namespace Vega.API.DbContext
{
    public class VegaDbContext : Microsoft.EntityFrameworkCore.DbContext
    {
        
        public DbSet<Make> Makes { get; set; }
        
        public DbSet<Feature> Features { get; set; }
        public VegaDbContext(DbContextOptions<VegaDbContext> options) : base(options)
        {
        
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<VehicleFeature>().HasKey(vf =>
                new {vf.VehicleId, vf.FeatureId});
        }
    }
}    