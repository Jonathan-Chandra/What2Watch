using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Movies
{
    public class Edit
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
                // Handler Logic
                var movie = await _context.Movies.FindAsync(request.Id);
                if (movie == null)
                {
                    throw new Exception("Could not find movie");
                }

                movie.Title = request.Title ?? movie.Title;
                movie.Rated = request.Rated ?? movie.Rated;
                movie.Released = request.Released ?? movie.Released;
                movie.Runtime = request.Runtime ?? movie.Runtime;
                movie.Genre = request.Genre ?? movie.Genre;
                movie.Director = request.Director ?? movie.Director;
                movie.Writer = request.Writer ?? movie.Writer;
                movie.Actors = request.Actors ?? movie.Actors;
                movie.Plot = request.Plot ?? movie.Plot;
                movie.Language = request.Language ?? movie.Language;
                movie.Country = request.Country ?? movie.Country;
                movie.Awards = request.Awards ?? movie.Awards;
                movie.Poster = request.Poster ?? movie.Poster;
                movie.Ratings = request.Ratings ?? movie.Ratings;
                movie.MetaScore = request.MetaScore ?? movie.MetaScore;
                movie.Type = request.Type ?? movie.Type;
                movie.TotalSeasons = request.TotalSeasons ?? movie.TotalSeasons;
                movie.Website = request.Website ?? movie.Website;
                movie.Streams = request.Streams ?? movie.Streams;

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving Changes");

            }
        }
    }
}