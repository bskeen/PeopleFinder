using PeopleFinder.Data.Constants;
using PeopleFinder.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace PeopleFinder.Data.Extensions
{
    public static class IQueryableExtensions
    {
        public static IQueryable<T> OrderWithDirection<T, TKey>(this IQueryable<T> query, Expression<Func<T, TKey>> keySelector, OrderingDirections direction)
        {
            if (direction == OrderingDirections.Ascending)
            {
                return query.OrderBy(keySelector);
            }
            else
            {
                return query.OrderByDescending(keySelector);
            }
        }

        public static IQueryable<Person> OrderPeopleWithDirection(this IQueryable<Person> query, PeopleOrderingColumns column, OrderingDirections direction)
        {
            if (column == PeopleOrderingColumns.Name)
            {
                return query.OrderWithDirection(p => p.Name, direction);
            }
            else
            {
                return query.OrderWithDirection(p => p.Age, direction);
            }
        }
    }
}
