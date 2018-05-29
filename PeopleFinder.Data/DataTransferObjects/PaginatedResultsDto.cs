using System;
using System.Collections.Generic;
using System.Text;

namespace PeopleFinder.Data.DataTransferObjects
{
    public class PaginatedResultsDto<T>
    {
        public int ReturnedCount { get; set; }
        public int TotalResultsCount { get; set; }
        public IEnumerable<T> Results { get; set; }
    }
}
