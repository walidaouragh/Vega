using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
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
    public class VegaController : ControllerBase
    {
        private readonly IVegaRepository _vegaRepository;
        private readonly IMapper _mapper;

        public VegaController(IVegaRepository vegaRepository, IMapper mapper)
        {
            _vegaRepository = vegaRepository;
            _mapper = mapper;
        }
        
        [HttpGet("makes")]
        public async Task<IActionResult> GetMakes()
        {
            /*var Id = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);*/
            var makes = await _vegaRepository.GetMakes().ToListAsync();

            var makesToReturn = _mapper.Map<IEnumerable<Make>>(makes);
            
            return Ok(makesToReturn);
        }
    }
}