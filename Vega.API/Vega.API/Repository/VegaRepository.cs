using System.Linq;
using Microsoft.EntityFrameworkCore;
using Vega.API.DbContext;

namespace Vega.API.Repository
{
    public class VegaRepository : IVegaRepository
    {
        private readonly VegaDbContext _vegaDbContext;

        public VegaRepository(VegaDbContext vegaDbContext)
        {
            _vegaDbContext = vegaDbContext;
        }
        public IQueryable<Models.Vega> GetVegaMakes()
        {
            return _vegaDbContext.Vega.Include(x => x.Make);
        }
    }
}