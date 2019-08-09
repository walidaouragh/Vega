using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vega.API.Controllers.Resources;
using Vega.API.Repository;
using Vega.API.Models;

namespace Vega.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleController : ControllerBase
    {
        private readonly IVehicleRepository _vegaRepository;
        private readonly IMapper _mapper;

        public VehicleController(IVehicleRepository vegaRepository, IMapper mapper)
        {
            _vegaRepository = vegaRepository;
            _mapper = mapper;
        }
        
        [HttpGet("makes")]
        public async Task<IActionResult> GetMakes()
        {
            var makes = await _vegaRepository.GetMakes().ToListAsync();

            var makesToReturn = _mapper.Map<IEnumerable<MakeResource>>(makes);
            
            return Ok(makesToReturn);
        }
        
        [HttpGet("features")]
        public async Task<IActionResult> GetFeatures()
        {
            var features = await _vegaRepository.GetFeatures().ToListAsync();

            var featuresToReturn = _mapper.Map<IEnumerable<Feature>>(features);
            
            return Ok(featuresToReturn);
        }
        
        [HttpPost]
        public IActionResult CreateVehicle([FromBody] VehicleResource vehicleResource)
        {
            var vehicle = _mapper.Map<VehicleResource, Vehicle>(vehicleResource);
            return Ok(vehicle);
        }
    }
}