using System;
using System.Linq;
using System.Threading.Tasks;
using Vega.API.Models;

namespace Vega.API.Repository
{
    public interface IVegaRepository
    {
        IQueryable<Make> GetMakes();
    }
}