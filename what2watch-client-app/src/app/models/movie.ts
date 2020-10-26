import { generateKeyPair } from "crypto";

export interface IMovie {
  id: string;
  title: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  ratings: string;
  metascore: string;
  type: string;
  totalseasons: string;
  website: string;
  streams: string;
}