using AutoMapper;
using PeopleFinder.Data.DataTransferObjects;
using PeopleFinder.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PeopleFinder.Data
{
    public class ConfigurationRepository : GenericRepository<Configuration, ConfigurationDto>, IConfigurationRepository
    {
        private static int _currentMillisecondDelay = 0;
        private static bool _isDelayInitialized = false;

        public ConfigurationRepository(PeopleFinderContext context, IMapper mapper)
            : base(context, mapper)
        {
        }

        public int GetCurrentMillisecondDelay()
        {
            if (!_isDelayInitialized)
            {
                var currentConfiguration = GetEntities().FirstOrDefault();

                _currentMillisecondDelay = currentConfiguration?.MillisecondDelay ?? 0;

                _isDelayInitialized = true;
            }

            return _currentMillisecondDelay;
        }

        public ConfigurationDto Update(ConfigurationDto dto)
        {
            var currentConfiguration = GetEntities().FirstOrDefault();

            dto.ID = currentConfiguration.ID;

            Mapper.Map(dto, currentConfiguration);

            Context.SaveChanges();

            _currentMillisecondDelay = dto.MillisecondDelay;

            return Mapper.Map<ConfigurationDto>(currentConfiguration);
        }
    }

    public interface IConfigurationRepository : IGenericRepository<ConfigurationDto>
    {
        ConfigurationDto Update(ConfigurationDto dto);
        int GetCurrentMillisecondDelay();
    }
}
