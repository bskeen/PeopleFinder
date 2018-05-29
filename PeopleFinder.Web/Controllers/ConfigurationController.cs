using Microsoft.AspNetCore.Mvc;
using PeopleFinder.Data;
using PeopleFinder.Data.DataTransferObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeopleFinder.Web.Controllers
{
    [Route("api/configuration")]
    public class ConfigurationController : Controller
    {
        private IConfigurationRepository _configurationRepository;

        public ConfigurationController(IConfigurationRepository configurationRepository)
        {
            _configurationRepository = configurationRepository;
        }

        [HttpPut]
        public ConfigurationDto Update([FromBody]ConfigurationDto configuration)
        {
            return _configurationRepository.Update(configuration);
        }

        protected override void Dispose(bool disposing)
        {
            base.Dispose(disposing);

            if (disposing)
            {
                if (_configurationRepository != null)
                {
                    _configurationRepository.Dispose();
                    _configurationRepository = null;
                }
            }
        }
    }
}
