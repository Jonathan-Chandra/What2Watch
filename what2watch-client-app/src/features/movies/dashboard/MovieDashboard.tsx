import React from "react";
import { Grid, List } from "semantic-ui-react";
import { IMovie } from "../../../app/models/movie";
import MovieDetails from "../details/MovieDetails";
import MovieForm from "../form/MovieForm";
import MovieList from "./MovieList";

interface IProps {
  movies: IMovie[];
  selectMovie: (id: string) => void;
}
export const MovieDashboard: React.FC<IProps> = ({ movies, selectMovie }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <MovieList movies={movies}/>
      </Grid.Column>  
        <Grid.Column width={6}>
          <MovieDetails />
          <MovieForm />
        </Grid.Column>
    </Grid>
  );
};

export default MovieDashboard;
