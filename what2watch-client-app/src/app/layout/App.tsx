import React, { useState, useEffect, Fragment } from "react";
import { Container, Header, Icon, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { IMovie } from "../models/movie";
import { NavBar } from "../../features/nav/NavBar";
import { MovieDashboard } from "../../features/movies/dashboard/MovieDashboard";

const App = () => {
  // Set API here
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
  const [editMode, setEditMode] = useState(false);
  const handleSelectMovie = (id: string) => {
    setSelectedMovie(movies.filter((a) => a.id === id)[0]);
  };
  useEffect(() => {
    axios.get<IMovie[]>("http://localhost:5000/api/movies").then((response) => {
      setMovies(response.data);
    });
  }, []);
  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <MovieDashboard
          movies={movies}
          selectMovie={handleSelectMovie}
          selectedMovie={selectedMovie!}
        />
      </Container>
    </Fragment>
  );
};

export default App;
