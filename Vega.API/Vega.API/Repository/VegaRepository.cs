using System.Linq;
using Microsoft.EntityFrameworkCore;
using Vega.API.DbContext;
using Vega.API.Models;

namespace Vega.API.Repository
{
    public class VegaRepository : IVegaRepository
    {
        private readonly VegaDbContext _vegaDbContext;

        public VegaRepository(VegaDbContext vegaDbContext)
        {
            _vegaDbContext = vegaDbContext;
        }
        public IQueryable<Make> GetMakes()
        {
            return _vegaDbContext.Makes.Include(x => x.Models).Include(x => x.Features);
        }
    }
}