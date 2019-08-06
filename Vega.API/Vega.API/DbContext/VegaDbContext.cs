using Microsoft.EntityFrameworkCore;
using Vega.API.Models;

namespace Vega.API.DbContext
{
    public class VegaDbContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public VegaDbContext(DbContextOptions<VegaDbContext> options) : base(options)
        {
        
        }
        
        public DbSet<Make> Makes { get; set; }
        
        public DbSet<Feature> Features { get; set; }
    }
}    