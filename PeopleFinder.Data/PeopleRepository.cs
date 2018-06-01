using AutoMapper;
using Microsoft.EntityFrameworkCore;
using PeopleFinder.Data.Constants;
using PeopleFinder.Data.DataTransferObjects;
using PeopleFinder.Data.Entities;
using PeopleFinder.Data.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PeopleFinder.Data
{
    public class PeopleRepository : GenericRepository<Person, BasePersonDto>, IPeopleRepository
    {
        public PeopleRepository(PeopleFinderContext context, IMapper mapper)
            : base(context, mapper)
        {
        }

        protected override IQueryable<Person> GetEntities()
        {
            return base.GetEntities()
                .Include(p => p.InterestLink)
                    .ThenInclude(il => il.Interest)
                .Include(p => p.State);
        }

        public PaginatedResultsDto<BasePersonDto> GetAllWithPaginationAndFiltering(string filter, PersonOrderingDto ordering, PaginationDto pagination)
        {
            IQueryable<Person> query = GetEntities();
            int returnedCount = 0;
            int totalResultsCount = 0;

            if (!string.IsNullOrWhiteSpace(filter))
            {
                var searchTerms = filter.Split(' ').Where(st => !string.IsNullOrWhiteSpace(st));

                foreach (var searchTerm in searchTerms)
                {
                    query = query.Where(p => p.Name.Contains(searchTerm));
                }
            }

            query = query.OrderPeopleWithDirection(ordering.OrderingColumn, ordering.OrderingDirection);

            totalResultsCount = query.Count();

            query = query.Skip(pagination.Skip).Take(pagination.Take);

            List<Person> results = query.ToList();

            returnedCount = results.Count;

            return new PaginatedResultsDto<BasePersonDto>
            {
                ReturnedCount = returnedCount,
                TotalResultsCount = totalResultsCount,
                Results = Mapper.Map<IEnumerable<BasePersonDto>>(results)
            };
        }

        public PersonDto GetOne(int id)
        {
            return Mapper.Map<PersonDto>(GetEntities().FirstOrDefault(p => p.ID == id));
        }
    }

    public interface IPeopleRepository : IGenericRepository<BasePersonDto>
    {
        PaginatedResultsDto<BasePersonDto> GetAllWithPaginationAndFiltering(string filter, PersonOrderingDto ordering, PaginationDto pagination);
        PersonDto GetOne(int id);
    }
}
