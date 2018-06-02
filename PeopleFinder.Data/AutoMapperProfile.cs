using AutoMapper;
using PeopleFinder.Data.DataTransferObjects;
using PeopleFinder.Data.Entities;
using PeopleFinder.Data.Resolvers;
using System;
using System.Collections.Generic;
using System.Text;

namespace PeopleFinder.Data
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Configuration, ConfigurationDto>()
                .ReverseMap();

            CreateMap<Interest, InterestDto>()
                .ReverseMap();

            CreateMap<Person, BasePersonDto>()
                .ForMember(d => d.StateName, ms => ms.MapFrom(e => e.State.Name));

            CreateMap<Person, PersonDto>()
                .ForMember(d => d.Interests, ms => ms.ResolveUsing<PersonInterestsResolver>())
                .ForMember(d => d.StateName, ms => ms.MapFrom(e => e.State.Abbreviation));

            CreateMap<PersonDto, Person>()
                .ForMember(e => e.InterestLink, ms => ms.Ignore());

            CreateMap<State, StateDto>();
        }
    }
}
