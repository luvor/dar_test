import React from "react";
import { Movie } from "../../types";
import MovieItem from "../movieItem/MovieItem";
import "../../assets/css/Movie.css";

type Props = {
  movies: Movie[];
  watchList: number[];
  setWatchList: Function;
};

const MovieList: React.FC<Props> = (props: Props) => {
  return (
    <div className="movie__list">
      {props.movies.map((movie) => {
        return (
          <MovieItem
            watchList={props.watchList}
            setWatchList={props.setWatchList}
            movie={movie}
            key={"movie_" + movie.id}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
