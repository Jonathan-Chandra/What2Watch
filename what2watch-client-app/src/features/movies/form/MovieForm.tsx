import React from "react";
import { Form, Input, Segment, Select } from "semantic-ui-react";

export const MovieForm = () => {
  return (
    <Segment>
      <Form>
        <Form.Input placeholder="Title" />
        <Form.Input placeholder="Rated" />
        <Form.Input placeholder="Release Date" />
        <Form.Input placeholder="Runtime" />
        <Form.Input placeholder="Genre" />
        <Form.Input placeholder="Director" />
        <Form.Input placeholder="Writer" />
        <Form.Input placeholder="Actors" />
        <Form.TextArea rows={3} placeholder="Plot" />
        <Form.Input placeholder="Language" />
        <Form.Input placeholder="Country" />
        <Form.Input placeholder="Awards" />
        <Form.Input placeholder="Poster" />
        <Form.Input placeholder="Ratings" />
        <Form.Input placeholder="Metascore" />
        <Form.Input placeholder="Type" />
        <Form.Input placeholder="Total Seasons" />
        <Form.Input placeholder="Website" />
        <Form.Input placeholder="Streams" />
      </Form>
    </Segment>
  );
};

export default MovieForm;
