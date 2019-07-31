namespace Vega.API.Models
{
    public class Makes
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Model { get; set; }
        public Makes Make { get; set; }
    }
}