using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Vega.API.Models
{
    [Table("Vehicles")]
    public class Vehicle
    {
        public int VehicleId { get; set; }
        public string Photo { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public decimal Price { get; set; }
        public DateTime LastUpdate { get; set; }
        public Contact Contact { get; set; }
    }
}