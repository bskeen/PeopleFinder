using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PeopleFinder.Data.Entities
{
    [Table("Configurations")]
    public class Configuration : IEntity
    {
        [Column("ConfigurationID")]
        public int ID { get; set; }
        public int MillisecondDelay { get; set; }
    }
}
