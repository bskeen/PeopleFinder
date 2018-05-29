using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PeopleFinder.Data.Entities
{
    [Table("Interests")]
    public class Interest : IEntity
    {
        [Column("InterestID")]
        public int ID { get; set; }
        public string Name { get; set; }

        public ICollection<PersonInterest> PersonLink { get; set; }
    }
}
