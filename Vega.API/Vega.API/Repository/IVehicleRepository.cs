using System.Linq;
using System.Threading.Tasks;
using Vega.API.Models;

namespace Vega.API.Repository
{
    public interface IVehicleRepository
    {
        IQueryable<Vehicle> GetVehicles();
        IQueryable<Feature> GetFeatures();

        IQueryable<Vehicle> GetVehicle(int vehicleId);

        Task UpdateVehicle(Vehicle vehicle);

        Task <Vehicle> CreateVehicle(Vehicle vehicle);

        Task DeleteVehicle(Vehicle vehicle);
    }
}