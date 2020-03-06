using System.Linq;
using System.Threading.Tasks;
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

        public  IQueryable<Vehicle> GetVehicles()
        {
            return _vegaDbContext.Vehicles
                .Include(x => x.Contact);
        }

        public IQueryable<Feature> GetFeatures()
        {
            return _vegaDbContext.Features;
        }

        public  IQueryable<Vehicle> GetVehicle(int vehicleId)
        {
            return _vegaDbContext.Vehicles
                .Include(x => x.Contact)
                .Where(x => x.VehicleId == vehicleId);

        }

        public async Task UpdateVehicle(Vehicle vehicle)
        {
            _vegaDbContext.Vehicles.Update(vehicle);
            await _vegaDbContext.SaveChangesAsync();
        }

        public async Task<Vehicle> CreateVehicle(Vehicle vehicle)
        {
            var vehicleRecord = new Vehicle();
            _vegaDbContext.Vehicles.Add(vehicle);
            await _vegaDbContext.SaveChangesAsync();
            return vehicleRecord;
        }

        public async Task DeleteVehicle(Vehicle vehicle)
       {
           _vegaDbContext.Vehicles.Remove(vehicle);
           await _vegaDbContext.SaveChangesAsync();
       }
    }
}