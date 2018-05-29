using System;
using System.Collections.Generic;
using System.Text;

namespace PeopleFinder.Data.DataTransferObjects
{
    public class ConfigurationDto : IDataTransferObject
    {
        public int ID { get; set; }
        public int MillisecondDelay { get; set; }
    }
}
