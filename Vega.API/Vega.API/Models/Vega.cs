using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Vega.API.Models
{
    public class Vega
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Makes> Make { get; set; }

        public Vega()
        {
            Make = new Collection<Makes>();
        }
    }
}