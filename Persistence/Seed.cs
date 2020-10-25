using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {   
            if (!context.Movies.Any())
            {
                var movies = new List<Movie>
                {
                    new Movie
                    {
                        Title = "Movie 1",
                        Rated = "R",
                        Released = "2000",
                        Plot = "plot 1"
                    },
                    new Movie
                    {
                        Title = "Movie 2",
                        Rated = "G",
                        Released = "2001",
                        Plot = "plot 2"
                    },
                    new Movie
                    {
                        Title = "Movie 3",
                        Rated = "PG-13",
                        Released = "2002",
                        Plot = "plot 3"
                    },
                    new Movie
                    {
                        Title = "Movie 4",
                        Rated = "R",
                        Released = "2003",
                        Plot = "plot 4"
                    },
                    new Movie
                    {
                        Title = "Movie 5",
                        Rated = "R",
                        Released = "2004",
                        Plot = "plot 5"
                    },
                    new Movie
                    {
                        Title = "Movie 6",
                        Rated = "R",
                        Released = "2005",
                        Plot = "plot 5"
                    },
                };

                context.Movies.AddRange(movies);
                context.SaveChanges();
            }
        }
    }
}