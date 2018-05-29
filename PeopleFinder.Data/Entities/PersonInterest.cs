using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PeopleFinder.Data.Entities
{
    [Table("PersonInterests")]
    public class PersonInterest
    {
        public int PersonID { get; set; }
        public Person Person { get; set; }

        public int InterestID { get; set; }
        public Interest Interest { get; set; }
    }
}
