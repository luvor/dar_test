import React, { useState } from "react";
import { movies } from "../../mock";
import MovieList from "../../components/movieList/MovieList";

export default function Main() {
  const [watchList, setWatchList] = useState([]);
  return (
    <div className="movies">
      <h2 className="movies__title">
        Edelweiss ✦ Movies ({movies.length}){" "}
        <span className="movies__watchlist">
          Watchlist ({watchList.length})
        </span>
      </h2>
      <MovieList
        movies={movies}
        watchList={watchList}
        setWatchList={setWatchList}
      />
      <div className="edelweiss__footer">
        <p>
          Растёт он в горах среди снега, <br />
          Где холод ущелий жесток. <br />
          Народ Прометеевьим цветом <br />
          Зовет недоступный цветок. <br />
          За то, что цветочное пламя <br />
          Прекрасно, как добрая весть, <br />
          За то, что навеки корнями <br />
          Прикован к горам эдельвейс
        </p>
      </div>
    </div>
  );
}
