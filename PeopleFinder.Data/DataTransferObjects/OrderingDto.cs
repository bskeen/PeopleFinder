using PeopleFinder.Data.Constants;
using System;
using System.Collections.Generic;
using System.Text;

namespace PeopleFinder.Data.DataTransferObjects
{
    public class OrderingDto
    {
        //private OrderingDirections _orderingDirection;
        //public OrderingDirections? OrderingDirection
        //{
        //    get => _orderingDirection;
        //    set => _orderingDirection = value ?? OrderingDirections.Ascending;
        //}

        public OrderingDirections OrderingDirection { get; set; } = OrderingDirections.Ascending;
    }
}
