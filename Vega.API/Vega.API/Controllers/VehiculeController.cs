using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vega.API.Repository;
using Vega.API.Models;

namespace Vega.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehiculeController : ControllerBase
    {
        private readonly IVehiculeRepository _vegaRepository;
        private readonly IMapper _mapper;

        public VehiculeController(IVehiculeRepository vegaRepository, IMapper mapper)
        {
            _vegaRepository = vegaRepository;
            _mapper = mapper;
        }
        
        [HttpGet("makes")]
        public async Task<IActionResult> GetMakes()
        {
            var makes = await _vegaRepository.GetMakes().ToListAsync();

            var makesToReturn = _mapper.Map<IEnumerable<Make>>(makes);
            
            return Ok(makesToReturn);
        }
        
        [HttpGet("features")]
        public async Task<IActionResult> GetFeatures()
        {
            var features = await _vegaRepository.GetFeatures().ToListAsync();

            var featuresToReturn = _mapper.Map<IEnumerable<Feature>>(features);
            
            return Ok(featuresToReturn);
        }
    }
}