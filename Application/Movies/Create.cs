using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Movies
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Title { get; set; }

            public string Rated { get; set; }

            public string Released { get; set; }

            public string Runtime { get; set; }

            public string Genre { get; set; }

            public string Director { get; set; }

            public string Writer { get; set; }

            public string Actors { get; set; }

            public string Plot { get; set; }

            public string Language { get; set; }

            public string Country { get; set; }

            public string Awards { get; set; }

            public string Poster { get; set; }

            public string Ratings { get; set; }

            public string MetaScore { get; set; }

            public string Type { get; set; }

            public string TotalSeasons { get; set; }
            public string Website { get; set; }

            public string Streams { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {   
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
               _context = context; 
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var movie = new Movie
                {
                    Id = request.Id,
                    Title = request.Title,
                    Rated = request.Rated,
                    Released = request.Released,
                    Runtime = request.Runtime,
                    Genre  = request.Genre,
                    Director = request.Director,
                    Writer = request.Writer, 
                    Actors = request.Actors,
                    Plot = request.Plot,
                    Language = request.Language,
                    Country = request.Country,
                    Awards = request.Awards, 
                    Poster = request.Poster,
                    Ratings = request.Ratings,
                    MetaScore = request.MetaScore,
                    Type = request.Type,
                    TotalSeasons = request.TotalSeasons,
                    Website = request.Website,
                    Streams = request.Streams
                };
                _context.Movies.Add(movie);
                var success = await _context.SaveChangesAsync() > 0;
                if(success) return Unit.Value;
                throw new Exception("Problem saving changes.");
            }
        }
    }
}