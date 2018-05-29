﻿using System;
using System.Collections.Generic;
using System.Text;

namespace PeopleFinder.Data.DataTransferObjects
{
    public class PersonDto : IDataTransferObject
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public int StateID { get; set; }
        public string Zip { get; set; }
        public int Age { get; set; }
        public string PictureUrl { get; set; }

        public IEnumerable<InterestDto> Interests { get; set; }
    }
}