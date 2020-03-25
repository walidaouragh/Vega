using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace Vega.API.Models
{
    [Table("Vehicles")]
    public class Vehicle
    {
        public int VehicleId { get; set; }
        public string Photo { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public int Year { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public decimal Price { get; set; }
        public DateTime LastUpdate { get; set; }
        public Contact Contact { get; set; }
        public List<VehicleFeature> VehicleFeature{ get; set; } = new List<VehicleFeature>();
    }
}