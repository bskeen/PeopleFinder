using AutoMapper;
using PeopleFinder.Data.DataTransferObjects;
using PeopleFinder.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PeopleFinder.Data.Resolvers
{
    public class PersonInterestsResolver : IValueResolver<Person, PersonDto, IEnumerable<InterestDto>>
    {
        public IEnumerable<InterestDto> Resolve(Person source, PersonDto destination, IEnumerable<InterestDto> destMember, ResolutionContext context)
        {
            return context.Mapper.Map<IEnumerable<InterestDto>>(source.InterestLink.Select(il => il.Interest));
        }
    }
}
