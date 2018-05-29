using Microsoft.AspNetCore.Mvc;
using PeopleFinder.Data;
using PeopleFinder.Data.Constants;
using PeopleFinder.Data.DataTransferObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeopleFinder.Web.Controllers
{
    [Route("api/[controller]")]
    public class PeopleController : Controller
    {
        private IPeopleRepository _peopleRepository;

        public PeopleController(IPeopleRepository peopleRepository)
        {
            _peopleRepository = peopleRepository;
        }

        [HttpGet]
        public PaginatedResultsDto<PersonDto> Get(PersonOrderingDto ordering, PaginationDto pagination, string filter = null)
        {
            
            return _peopleRepository.GetAllWithPaginationAndFiltering(filter, ordering, pagination);
        }

        protected override void Dispose(bool disposing)
        {
            base.Dispose(disposing);

            if (disposing)
            {
                if (_peopleRepository != null)
                {
                    _peopleRepository.Dispose();
                    _peopleRepository = null;
                }
            }
        }
    }
}
