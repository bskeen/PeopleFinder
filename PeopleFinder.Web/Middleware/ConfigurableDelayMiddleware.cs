using Microsoft.AspNetCore.Http;
using PeopleFinder.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeopleFinder.Web.Middleware
{
    public class ConfigurableDelayMiddleware
    {
        private readonly RequestDelegate _next;

        public ConfigurableDelayMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext httpContext, IConfigurationRepository configurationRepository)
        {
            var delay = configurationRepository.GetCurrentMillisecondDelay();

            await Task.Delay(delay);

            await _next(httpContext);
        }
    }
}
