using Microsoft.EntityFrameworkCore;

namespace Vega.API.DbContext
{
    public class VegaDbContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public VegaDbContext(DbContextOptions<VegaDbContext> options) : base(options)
        {
        
        }
        
        public DbSet<Models.Vega> Vega { get; set; }
    }
}    