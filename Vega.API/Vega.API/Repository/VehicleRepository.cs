using System.Linq;
using Microsoft.EntityFrameworkCore;
using Vega.API.DbContext;
using Vega.API.Models;

namespace Vega.API.Repository
{
    public class VehicleRepository : IVehicleRepository
    {
        private readonly VegaDbContext _vegaDbContext;

        public VehicleRepository(VegaDbContext vegaDbContext)
        {
            _vegaDbContext = vegaDbContext;
        }
        public IQueryable<Make> GetMakes()
        {
            return _vegaDbContext.Makes.Include(x => x.Models);
        }

        public IQueryable<Feature> GetFeatures()
        {
            return _vegaDbContext.Features;
        }
    }
}