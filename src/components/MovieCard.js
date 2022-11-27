import React from "react";
import { Link } from "react-router-dom";
const MovieCard = ({ movie, id }) => {
  return (
    <div div className="img-cont ">
      <Link to={`/movies/${id}`}>
        <img
          src={movie.Poster}
          alt="movie"
          style={{width:"23vw",height:"55vh"}}
        />

        <p className="card-text">{movie.Title}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
