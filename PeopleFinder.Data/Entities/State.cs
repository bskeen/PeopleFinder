using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PeopleFinder.Data.Entities
{
    [Table("States")]
    public class State : IEntity
    {
        [Column("StateID")]
        public int ID { get; set; }
        public string Name { get; set; }
        public string Abbreviation { get; set; }
    }
}
