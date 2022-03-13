import React, { useState } from "react";
import { Movie } from "../../types";
import ActorList from "../actorList/ActorList";

type Props = {
  movie: Movie;
  watchList: number[];
  setWatchList: Function;
};

const MovieItem: React.FC<Props> = (props: Props) => {
  const { movie, watchList, setWatchList } = props;
  const [page, setPage] = useState(0);
  const [addWL, setAddWL] = useState("Смотреть позже");
  return (
    <div key={movie.id} className="movie__item">
      <img
        className="movie__preview"
        src={movie.preview_img}
        alt={movie.title}
      />
      <div className="movie__text">
        <h3 className="movie__title">
          {movie.title} [{movie.year}]
        </h3>
        <div className="movie__nav">
          <p
            className={
              page === 0 ? "movie__link movie__link-active" : "movie__link"
            }
            onClick={() => setPage(0)}
          >
            Короткое описание
          </p>
          <p
            className={
              page === 1 ? "movie__link movie__link-active" : "movie__link"
            }
            onClick={() => setPage(1)}
          >
            Полное описание
          </p>
          <p
            className={
              page === 2 ? "movie__link movie__link-active" : "movie__link"
            }
            onClick={() => setPage(2)}
          >
            Актеры
          </p>
          <p
            className="movie__link"
            onClick={() => {
              if (addWL != "Добавлено") {
                setWatchList([...watchList, movie.id]);
                setAddWL("Добавлено");
              }
            }}
          >
            {addWL}
          </p>
        </div>
        {page === 0 ? (
          <div className="movie__text_first">
            <p className="movie__slogan">
              {movie.slogan && movie.slogan.length > 1 ? (
                <>
                  <span className="movie__slogan-label">Слоган:</span> «
                  {movie.slogan}»
                </>
              ) : (
                ""
              )}
            </p>
            <p className="movie__shortdescription">{movie.short_description}</p>
          </div>
        ) : page === 1 ? (
          <p className="movie__description">{movie.description}</p>
        ) : (
          <ActorList actors_id={movie.actors} />
        )}
      </div>
    </div>
  );
};

export default MovieItem;
