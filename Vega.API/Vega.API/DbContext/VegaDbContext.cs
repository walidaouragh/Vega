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
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<VehicleFeature>()
                .HasKey(t => new { t.VehicleId, t.FeatureId });

            modelBuilder.Entity<VehicleFeature>()
                .HasOne(pt => pt.Vehicle)
                .WithMany(p => p.VehicleFeature)
                .HasForeignKey(pt => pt.VehicleId);
        }
    }
}