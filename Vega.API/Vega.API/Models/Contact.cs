using System.ComponentModel.DataAnnotations.Schema;

namespace Vega.API.Models
{
    [Table("Contacts")]
    public class Contact
    {
        public int ContactId { get; set; }
        public string ContactName { get; set; }
        public string ContactEmail { get; set; }
        public string ContactPhone { get; set; }
    }
}