
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Vega.API.Models
{
    public class VehicleToUpdate
    {
        public string Photo { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public int Year { get; set; }
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        public decimal Price { get; set; }
        public Contact Contact { get; set; }

        public List<Feature> Features{ get; set; }
    }
}