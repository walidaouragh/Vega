using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Vega.API.Models;

namespace Vega.API.DbContext
{
    public class Seed
    {
        public static void SeedDatabase(VegaDbContext context)
        {
            if (context.Database.GetMigrations().Count() > 0
                && context.Database.GetPendingMigrations().Count() == 0
                && context.Vehicles.Count() == 0)
            {

                context.Vehicles.AddRange(
                    new Vehicle()
                    {
                        Photo = "bit.ly/2CLuDnP",
                        Brand = "Porsche",
                        Model = "Cayenne",
                        Year = 2020,
                        Price = 5999,
                        LastUpdate = DateTime.Now,
                        Contact = new Contact()
                        {
                            ContactName = "Walid Aouragh",
                            ContactEmail = "walid@test.com",
                            ContactPhone = "777-888-9999"
                        }
                    },
                    new Vehicle()
                    {
                        Photo = "bit.ly/2CL6JsO",
                        Brand = "Chrysler",
                        Model = "300",
                        Year = 2018,
                        Price = 3500,
                        LastUpdate = DateTime.Now,
                        Contact = new Contact()
                        {
                            ContactName = "Nadir Falta",
                            ContactEmail = "nadhir@test.com",
                            ContactPhone = "111-222-3333"
                        }
                    }
                    );

                context.Features.AddRange(
                    new List<Feature>()
                    {
                        new Feature()
                        {
                            FeatureName = "Remote Keyless Entry"
                        },
                        new Feature()
                        {
                            FeatureName = "Anti-Lock Brakes (ABS)"
                        },
                        new Feature()
                        {
                            FeatureName = "Electronic Stability/Skid-Control System"
                        },
                        new Feature()
                        {
                            FeatureName = "Rear-Seat DVD Player"
                        }
                    });
                context.SaveChanges();
            }
        }
    }
}