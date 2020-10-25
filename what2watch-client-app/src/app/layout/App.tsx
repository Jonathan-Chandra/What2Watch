import React, { useState, useEffect } from "react";
import { Header, Icon, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { IMovie } from "../models/movie";

const App = () => {
  // Set API here
  const [movies, setMovies] = useState<IMovie[]>([]);
  useEffect(() => {
    axios
      .get<IMovie[]>("http://localhost:5000/api/movies")
      .then((response) => {
        setMovies(response.data)
      });
  }, []);
  return (
    <div>
      <Header as="h2">
        <Icon name="user" />
        <Header.Content>What2Watch</Header.Content>
      </Header>
      <List>
        {movies.map((movie) => (
          <List.Item key={movie.id}>{movie.title}</List.Item>
        ))}
      </List>
    </div>
  );
};

export default App;
