import React from "react";
import { Button, Icon, Image, Item, Label, Segment } from "semantic-ui-react";
import { IMovie } from "../../../app/models/movie";

interface IProps {
  movies: IMovie[];
  selectMovie : (id: string) => void;
}

export const MovieList: React.FC<IProps> = ({ movies, selectMovie }) => {
  return (
    <Segment clearing>
      <Item.Group divided>
        {movies.map((movie) => (
          <Item key={movie.id}>
            <Icon name="film" size="large" />
            <Item.Content>
              <Item.Header as="a">{movie.title}</Item.Header>
              <Item.Meta>{movie.plot}</Item.Meta>
              <Item.Description>
                <div>{movie.director}</div>
                <div>{movie.actors}</div>
              </Item.Description>
              <Item.Extra>
                <Button onClick={ () => selectMovie(movie.id) } floated="right" content="View" color="blue" />
                <Label basic content="Genre" />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default MovieList;
