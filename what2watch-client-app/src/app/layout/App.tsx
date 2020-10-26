import React, { useState, useEffect, Fragment } from "react";
import { Container, Header, Icon, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { IMovie } from "../models/movie";
import { NavBar } from "../../features/nav/NavBar";

const App = () => {
  // Set API here
  const [movies, setMovies] = useState<IMovie[]>([]);
  useEffect(() => {
    axios.get<IMovie[]>("http://localhost:5000/api/movies").then((response) => {
      setMovies(response.data);
    });
  }, []);
  return (
    <Fragment>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <List>
          {movies.map((movie) => (
            <List.Item key={movie.id}>{movie.title}</List.Item>
          ))}
        </List>
      </Container>
    </Fragment>
  );
};

export default App;
