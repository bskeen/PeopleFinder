using Microsoft.AspNetCore.Builder;
using PeopleFinder.Web.Middleware;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeopleFinder.Web.Extensions
{
    public static class ConfigurableDelayMiddlewareExtensions
    {
        public static IApplicationBuilder UseConfigurableDelay(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<ConfigurableDelayMiddleware>();
        }
    }
}
