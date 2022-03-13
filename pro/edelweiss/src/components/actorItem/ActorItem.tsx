import React from "react";
import { Actor } from "../../types";

type Props = {
  actor: Actor;
};

const MovieItem: React.FC<Props> = (props: Props) => {
  const { actor } = props;
  return (
    <div key={actor.id} className="actor__item">
      <img src={actor.photo} alt={actor.name} className="actor__photo" />
      <div className="actor__text">
        <p className="actor__name">{actor.name}</p>
        <p className="actor__height">Рост: {actor.height}</p>
        <p className="actor__birthday">{actor.birthdate}</p>
      </div>
    </div>
  );
};

export default MovieItem;
