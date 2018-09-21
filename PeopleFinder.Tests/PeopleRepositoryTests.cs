using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Moq;
using PeopleFinder.Data;
using PeopleFinder.Data.DataTransferObjects;
using PeopleFinder.Data.Entities;
using Xunit;

namespace PeopleFinder.Tests
{
    public class PeopleRepositoryTests
    {
        private readonly Mock<PeopleFinderContext> _peopleFinderContextMock = new Mock<PeopleFinderContext>(new DbContextOptions<PeopleFinderContext>());
        private readonly Mock<DbSet<Person>> _personDbSetMock;
        private readonly Mock<IMapper> _mapperMock = new Mock<IMapper>();
        private readonly PeopleRepository _peopleRepository;

        public PeopleRepositoryTests()
        {
            _personDbSetMock = MockHelpers.GetQueryableMockDbSet<Person>(new List<Person>
            {
                new Person { ID = 1, Name = "Name1", City = "City1", State = new State { ID = 1, Name = "State1", Abbreviation = "S1" } },
                new Person { ID = 2, Name = "Name2", City = "City2", State = new State { ID = 2, Name = "State2", Abbreviation = "S2" } },
                new Person { ID = 3, Name = "Name3", City = "City3", State = new State { ID = 3, Name = "State3", Abbreviation = "S3" } },
                new Person { ID = 4, Name = "Name4", City = "City4", State = new State { ID = 4, Name = "State4", Abbreviation = "S4" } },
                new Person { ID = 5, Name = "Name5", City = "City5", State = new State { ID = 5, Name = "State5", Abbreviation = "S5" } },
            });
            _peopleFinderContextMock.Setup(x => x.Set<Person>())
                                    .Returns(_personDbSetMock.Object);
            _mapperMock.Setup(x => x.Map<IEnumerable<BasePersonDto>>(It.IsAny<IEnumerable<Person>>()))
                       .Returns((IEnumerable<Person> values) => values.Select(x => new BasePersonDto {
                            ID = x.ID,
                            Name = x.Name,
                            City = x.City,
                            StateName = x.State.Abbreviation
                        }));

            _peopleRepository = new PeopleRepository(_peopleFinderContextMock.Object, _mapperMock.Object);
        }

        [Theory]
        [InlineData(1, 4)]
        [InlineData(0, 6)]
        [InlineData(0, 0)]
        [InlineData(5, 2)]
        public void ShouldPaginateResults(int skip, int take)
        {
            PaginationDto pagination = new PaginationDto
            {
                Skip = skip,
                Take = take
            };

            PersonOrderingDto ordering = new PersonOrderingDto();

            var paginatedResult = _peopleRepository.GetAllWithPaginationAndFiltering("", ordering, pagination);
            var results = paginatedResult.Results.ToList();
            int expectedResultCount;

            if (pagination.Skip >= 5)
            {
                expectedResultCount = 0;
            }
            else if (pagination.Skip + pagination.Take > 5)
            {
                expectedResultCount = 5 - pagination.Skip;
            }
            else {
                expectedResultCount = pagination.Take;
            }

            Assert.Equal(expectedResultCount, results.Count);

            for (int i = 0; i < results.Count; i++)
            {
                Assert.Equal(i + skip + 1, results[i].ID);
            }
        }
    }
}
