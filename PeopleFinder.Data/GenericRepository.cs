using AutoMapper;
using PeopleFinder.Data.DataTransferObjects;
using PeopleFinder.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PeopleFinder.Data
{
    public class GenericRepository<E, DTO> : IGenericRepository<DTO>
        where E : class, IEntity
        where DTO : IDataTransferObject
    {
        public GenericRepository(PeopleFinderContext context, IMapper mapper)
        {
            Context = context;
            Mapper = mapper;
        }

        protected PeopleFinderContext Context { get; private set; }

        protected IMapper Mapper { get; }

        protected virtual IQueryable<E> GetEntities()
        {
            return Context.Set<E>();
        }

        public virtual IEnumerable<DTO> GetAll()
        {
            return Mapper.Map<IEnumerable<DTO>>(GetEntities());
        }

        public void Dispose()
        {
            Dispose(true);

            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (Context != null)
                {
                    Context.Dispose();
                    Context = null;
                }
            }
        }
    }

    public interface IGenericRepository<DTO> : IDisposable
    {
        IEnumerable<DTO> GetAll();
    }
}
