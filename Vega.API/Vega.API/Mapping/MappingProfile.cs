using AutoMapper;
using Vega.API.Models;

namespace Vega.API.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<VehicleToUpdate, Vehicle>().ReverseMap();
        }
    }
}