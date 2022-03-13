import React from "react";
import { actors } from "../../mock";
import ActorItem from "../actorItem/ActorItem";
import "../../assets/css/Actor.css";

type Props = {
  actors_id: number[];
};

const MovieList: React.FC<Props> = (props: Props) => {
  const actorsList = actors.filter((actor) =>
    props.actors_id.includes(actor.id)
  );
  return (
    <div className="actor__list">
      {actorsList.map((actor) => {
        return <ActorItem actor={actor} key={"actor_" + actor.id} />;
      })}
    </div>
  );
};

export default MovieList;
