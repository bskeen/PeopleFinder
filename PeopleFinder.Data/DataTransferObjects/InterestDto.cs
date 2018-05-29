using System;
using System.Collections.Generic;
using System.Text;

namespace PeopleFinder.Data.DataTransferObjects
{
    public class InterestDto : IDataTransferObject
    {
        public int ID { get; set; }
        public string Name { get; set; }
    }
}
