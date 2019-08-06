using System.Linq;
using Microsoft.EntityFrameworkCore;
using Vega.API.DbContext;
using Vega.API.Models;

namespace Vega.API.Repository
{
    public class VehiculeRepository : IVehiculeRepository
    {
        private readonly VegaDbContext _vegaDbContext;

        public VehiculeRepository(VegaDbContext vegaDbContext)
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