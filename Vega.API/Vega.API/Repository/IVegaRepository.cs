using System;
using System.Linq;
using System.Threading.Tasks;

namespace Vega.API.Repository
{
    public interface IVegaRepository
    {
        IQueryable<Models.Vega> GetVegaMakes();
    }
}