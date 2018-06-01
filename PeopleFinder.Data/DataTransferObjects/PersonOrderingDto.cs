using PeopleFinder.Data.Constants;
using System;
using System.Collections.Generic;
using System.Text;

namespace PeopleFinder.Data.DataTransferObjects
{
    public class PersonOrderingDto : OrderingDto
    {
        public PeopleOrderingColumns OrderingColumn { get; set; } = PeopleOrderingColumns.Name;
    }
}
