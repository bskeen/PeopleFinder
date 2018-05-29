using PeopleFinder.Data.Constants;
using System;
using System.Collections.Generic;
using System.Text;

namespace PeopleFinder.Data.DataTransferObjects
{
    public class PersonOrderingDto : OrderingDto
    {
        //private PeopleOrderingColumns _orderingColumn;
        //public PeopleOrderingColumns? OrderingColumn
        //{
        //    get => _orderingColumn;
        //    set => _orderingColumn = value ?? PeopleOrderingColumns.Name;
        //}

        public PeopleOrderingColumns OrderingColumn { get; set; } = PeopleOrderingColumns.Name;
    }
}
