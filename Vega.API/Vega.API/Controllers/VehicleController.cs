using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vega.API.Repository;
using Vega.API.Models;

namespace Vega.API.Controllers
{
    [Route("api/vehicle")]
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

        [HttpGet]
        public async Task<IActionResult> GetVehicles()
        {
            List<Vehicle> vehicle = await _vegaRepository.GetVehicles().ToListAsync();

            List<VehicleResult> vehicleToReturn = vehicle.Select(MapVehicleToVehicleResult).ToList();

            if (vehicleToReturn.Any() && vehicleToReturn.Count > 0)
            {
                return Ok(vehicleToReturn);
            }

            return NoContent();
        }

        [HttpGet("features")]
        public async Task<IActionResult> GetFeatures()
        {
            List<Feature> features = await _vegaRepository.GetFeatures().ToListAsync();

            if (features.Any() && features.Count > 0)
            {
                return Ok(features);
            }

            return NoContent();
        }


        [HttpGet("{vehicleId}")]
        public async Task<IActionResult> GetVehicle(int vehicleId)
        {
            Vehicle vehicle = await _vegaRepository.GetVehicle(vehicleId).FirstOrDefaultAsync();
            if (vehicle == null)
            {
                return NotFound($"Could not find vehicle with id: {vehicleId}");
            }

            return Ok(vehicle);
        }

         [HttpPut("{vehicleId}")]

         public async Task<IActionResult> UpdateVehicle(int vehicleId, [FromBody] VehicleToUpdate vehicleToUpdate)
         {
             Vehicle existingVehicle = await _vegaRepository.GetVehicle(vehicleId).FirstOrDefaultAsync();

             if (existingVehicle == null)
             {
                 return NotFound($"Could not find vehicle with id: {vehicleId}");
             }

             if (vehicleToUpdate == null)
             {
                 throw new ArgumentNullException(nameof(vehicleToUpdate));
             }

             await UpdateVehicle(existingVehicle, vehicleToUpdate);

             return Ok();

         }

        [HttpPost]
        public async Task<IActionResult> CreateVehicle([FromBody] Vehicle vehicle)
        {
            var vehicleExist = await _vegaRepository.GetVehicle(vehicle.VehicleId).FirstOrDefaultAsync();
            if (vehicleExist != null)
            {
                 return Conflict($"This vehicle '{vehicle.Brand}' already exists");
            }

            var result = new Vehicle()
            {
                Photo = vehicle.Photo,
                Brand = vehicle.Brand,
                Model = vehicle.Model,
                Year = vehicle.Year,
                Price = vehicle.Price,
                LastUpdate = DateTime.Now,
                Contact = new Contact()
                {
                    ContactName = vehicle.Contact.ContactName,
                    ContactEmail = vehicle.Contact.ContactEmail,
                    ContactPhone = vehicle.Contact.ContactPhone
                }
            };

            await _vegaRepository.CreateVehicle(result);
            return Ok(result);

        }

        [HttpDelete("{vehicleId}")]
        public async Task<IActionResult> DeleteVehicle(int vehicleId)
        {
            var record = await _vegaRepository.GetVehicle(vehicleId).FirstOrDefaultAsync();
            if (record != null)
            {
                await _vegaRepository.DeleteVehicle(record);
            }
            return NoContent();
        }

        private VehicleResult MapVehicleToVehicleResult(Vehicle vehicle)
        {
            var vehicleResult = new VehicleResult()
            {
                VehicleId = vehicle.VehicleId,
                Photo = vehicle.Photo,
                Brand = vehicle.Brand,
                Model = vehicle.Model,
                Year = vehicle.Year,
                Price = vehicle.Price,
                LastUpdate = vehicle.LastUpdate,
                Contact = vehicle.Contact
            };

            return vehicleResult;
        }

        private async Task UpdateVehicle(Vehicle existingVehicle, VehicleToUpdate vehicleToUpdate)
        {
            existingVehicle.Photo = vehicleToUpdate.Photo;
            existingVehicle.Brand = vehicleToUpdate.Brand;
            existingVehicle.Model = vehicleToUpdate.Model;
            existingVehicle.Year = vehicleToUpdate.Year;
            existingVehicle.Price = vehicleToUpdate.Price;
            existingVehicle.LastUpdate = DateTime.Now;

            existingVehicle.Contact.ContactName = vehicleToUpdate.Contact.ContactName;
            existingVehicle.Contact.ContactEmail = vehicleToUpdate.Contact.ContactEmail;
            existingVehicle.Contact.ContactPhone = vehicleToUpdate.Contact.ContactPhone;

            await _vegaRepository.UpdateVehicle(existingVehicle);
        }
    }
}