import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import { IMovie } from "../../../app/models/movie";

interface IProps{
  movie: IMovie;
}

export const MovieDetails: React.FC<IProps> = ({movie}) => {
  return (
    <Card fluid>
      <Image
        src={`/assets/placeholder.png`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{movie.title}</Card.Header>
        <Card.Meta>
  <span className="date">{movie.released}</span>
        </Card.Meta>
        <Card.Description>
          {movie.plot}            
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
          <Button.Group widths={2}>
            <Button basic color='blue' content='Edit' />
            <Button basic color='grey' content='Cancel' />
          </Button.Group>
      </Card.Content>
    </Card>
  );
};
export default MovieDetails;
