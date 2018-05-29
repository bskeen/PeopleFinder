using Microsoft.EntityFrameworkCore;
using PeopleFinder.Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace PeopleFinder.Data
{
    public class PeopleFinderContext: DbContext
    {
        public PeopleFinderContext(DbContextOptions<PeopleFinderContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<PersonInterest>()
                .HasKey(pi => new { pi.PersonID, pi.InterestID });
        }

        public DbSet<Configuration> Configurations { get; set; }
        public DbSet<Interest> Interests { get; set; }
        public DbSet<Person> People { get; set; }
        public DbSet<PersonInterest> PersonInterests { get; set; }
        public DbSet<State> States { get; set; }
    }
}
