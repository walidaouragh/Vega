using System.ComponentModel.DataAnnotations.Schema;

namespace Vega.API.Models
{
    [Table("Features")]
    public class Feature
    {
        public int FeatureId { get; set; }
        public string FeatureName { get; set; }
    }
}