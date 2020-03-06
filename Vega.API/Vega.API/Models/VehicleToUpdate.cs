using System;
using System.Collections.Generic;

namespace Vega.API.Models
{
    public class VehicleToUpdate
    {
        public string Photo { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public decimal Price { get; set; }
        public Contact Contact { get; set; }
    }
}