import React from "react";
import { Grid, List } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import { IMovie } from "../../../app/models/movie";
import MovieDetails from "../details/MovieDetails";
import MovieForm from "../form/MovieForm";
import MovieList from "./MovieList";

interface IProps {
  movies: IMovie[];
  selectMovie: (id: string) => void;
  selectedMovie: IMovie | null;
}
export const MovieDashboard: React.FC<IProps> = ({
  movies,
  selectMovie,
  selectedMovie,
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <MovieList movies={movies} selectMovie={selectMovie} />
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedMovie && <MovieDetails movie={selectedMovie} />}
        <MovieForm />
      </Grid.Column>
    </Grid>
  );
};

export default MovieDashboard;
