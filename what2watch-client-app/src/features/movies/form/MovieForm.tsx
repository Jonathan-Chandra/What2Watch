import React, { useState } from "react";
import { Button, Form, Input, Segment, Select } from "semantic-ui-react";
import { IMovie } from "../../../app/models/movie";

interface IProps {
  setEditMode: (editMode: boolean) => void;
  movie: IMovie;
}

export const MovieForm: React.FC<IProps> = ({
  setEditMode,
  movie: initialFormState,
}) => {
  const initializeForm = () => {
    if (initialFormState) {
      return initialFormState;
    } else {
      return {
        id: "",
        title: "",
        rated: "",
        released: "",
        runtime: "",
        genre: "",
        director: "",
        writer: "",
        actors: "",
        plot: "",
        language: "",
        country: "",
        awards: "",
        poster: "",
        ratings: "",
        metascore: "",
        type: "",
        totalseasons: "",
        website: "",
        streams: "",
      };
    }
  };
  const [movie, setMovie] = useState<IMovie>(initializeForm);
  return (
    <Segment clearing>
      <Form>
        <Form.Input placeholder="Title" value={movie.title} />
        <Form.Input placeholder="Rated" value={movie.rated} />
        <Form.Input placeholder="Release Date" value={movie.released} />
        <Form.Input placeholder="Runtime" value={movie.runtime} />
        <Form.Input placeholder="Genre" value={movie.genre} />
        <Form.Input placeholder="Director" valeu={movie.director} />
        <Form.Input placeholder="Writer" value={movie.writer} />
        <Form.Input placeholder="Actors" value={movie.actors} />
        <Form.TextArea rows={3} placeholder="Plot" value={movie.plot} />
        <Form.Input placeholder="Language" value={movie.language} />
        <Form.Input placeholder="Country" value={movie.country} />
        <Form.Input placeholder="Awards" value={movie.awards} />
        <Form.Input placeholder="Poster" value={movie.poster} />
        <Form.Input placeholder="Ratings" value={movie.ratings} />
        <Form.Input placeholder="Metascore" value={movie.metascore} />
        <Form.Input placeholder="Type" value={movie.type} />
        <Form.Input placeholder="Total Seasons" value={movie.totalseasons} />
        <Form.Input placeholder="Website" value={movie.website} />
        <Form.Input placeholder="Streams" value={movie.streams} />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button
          floated="right"
          type="button"
          onClick={() => setEditMode(false)}
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};

export default MovieForm;
