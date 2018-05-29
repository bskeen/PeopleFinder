using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace PeopleFinder.Data.Extensions
{
    public static class PeopleFinderDataApplicationBuilderExtensions
    {
        public static void AddPeopleFinderData(this IServiceCollection services)
        {
            IMapper mapper = new MapperConfiguration(cfg => cfg.AddProfile(new AutoMapperProfile())).CreateMapper();
            services.AddSingleton(typeof(IMapper), mapper);

            var assembly = typeof(PeopleFinderDataApplicationBuilderExtensions).GetTypeInfo().Assembly;
            services.AddDefaultServices(assembly);
        }

        public static void AddDefaultServices(this IServiceCollection services, Assembly assembly)
        {
            var definedTypes = assembly.DefinedTypes;
            var interfaces = definedTypes.Where(x => x.IsInterface);
            var classes = definedTypes.Where(x => x.IsClass && !x.IsAbstract);

            foreach (var declaredInterface in interfaces)
            {
                var interfaceName = declaredInterface.Name;
                var implementedClasses = classes.Where(x => x.ImplementedInterfaces.Select(y => y.Name).Contains(interfaceName));

                int count = implementedClasses.Count();

                if (count == 1)
                {
                    var implementedClass = implementedClasses.FirstOrDefault();
                    services.AddScoped(declaredInterface.AsType(), implementedClass.AsType());
                }
                else if (count > 1)
                {
                    var implementedClass = implementedClasses.FirstOrDefault(x => $"I{x.Name}" == interfaceName);
                    if (implementedClass != null)
                    {
                        services.AddScoped(declaredInterface.AsType(), implementedClass.AsType());
                    }
                }
            }
        }
    }
}
