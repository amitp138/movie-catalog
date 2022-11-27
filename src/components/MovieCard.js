import React from "react";
import { Link } from "react-router-dom";
const MovieCard = ({ movie, id }) => {
  return (
    <div className="img-cont ">
      <Link to={`/movies/${id}`} className="link">
        <img
          src={movie.Poster}
          alt="movie"
          className="image-mov"
          
        />

        <p className="card-text" >{movie.Title}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
