using System.ComponentModel.DataAnnotations.Schema;

namespace Vega.API.Models
{
    [Table("Features")]
    public class Feature
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}