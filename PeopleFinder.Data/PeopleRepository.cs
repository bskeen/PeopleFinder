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
    public class PeopleRepository : GenericRepository<Person, PersonDto>, IPeopleRepository
    {
        public PeopleRepository(PeopleFinderContext context, IMapper mapper)
            : base(context, mapper)
        {
        }

        public PaginatedResultsDto<PersonDto> GetAllWithPaginationAndFiltering(string filter, PersonOrderingDto ordering, PaginationDto pagination)
        {
            IQueryable<Person> query = GetEntities()
                .Include(p => p.InterestLink)
                .ThenInclude(il => il.Interest);
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

            return new PaginatedResultsDto<PersonDto>
            {
                ReturnedCount = returnedCount,
                TotalResultsCount = totalResultsCount,
                Results = Mapper.Map<IEnumerable<PersonDto>>(results)
            };
        }
    }

    public interface IPeopleRepository : IGenericRepository<PersonDto>
    {
        PaginatedResultsDto<PersonDto> GetAllWithPaginationAndFiltering(string filter, PersonOrderingDto ordering, PaginationDto pagination);
    }
}
