using System.Linq;
using Vega.API.Models;

namespace Vega.API.Repository
{
    public interface IVehiculeRepository
    {
        IQueryable<Make> GetMakes();
        IQueryable<Feature> GetFeatures();
    }
}