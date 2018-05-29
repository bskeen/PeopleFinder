using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PeopleFinder.Data.Entities
{
    [Table("People")]
    public class Person : IEntity
    {
        [Column("PersonID")]
        public int ID { get; set; }
        public string Name { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public int StateID { get; set; }
        public string Zip { get; set; }
        public int Age { get; set; }
        public string PictureUrl { get; set; }

        public ICollection<PersonInterest> InterestLink { get; set; }
    }
}
