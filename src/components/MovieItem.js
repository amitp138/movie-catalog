import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import star from "../Images/star.png";
import { Link } from "react-router-dom";
const MovieItem = () => {
  const { id } = useParams();

  console.log(id);
  const [Item, setItem] = useState([]);
  const getMovieRequest = async (id) => {
    const url = `http://www.omdbapi.com/?i=${id}&apikey=55dad6c3`;

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson) {
      setItem(responseJson);
    }
  };
  useEffect(() => {
    getMovieRequest(id);
  }, [id]);
  const tags = [Item.Genre];

  return (
    <div className=" container d-flex movcont">
      <div className="image m-3 img-fluid">
        <img src={Item.Poster} alt="movie" className="img-fluid" />
        
          <Link to="/" className="home-link btn btn-outline-warning ">Home</Link>
        
      </div>
      <div className="container">
        <div className=" d-flex m-3">
          <h2 className="m-3">
            <span class="badge bg-secondary ">{Item.Title}</span>
          </h2>

          <div className="line m-3 "></div>
          <div className=" d-flex row ">
            <h2 className="m-3 ">
              <img src={star} alt="star" className="star col mr-3" />
              <span class="badge bg-primary col ">{Item.imdbRating}</span>
            </h2>
          </div>
        </div>
        <div className="details m-3">
          <h1>
            <span class="badge bg-info ">Details</span>
          </h1>
          <div>
            <h3> {Item.Plot}</h3>
          </div>
          <h3>
            <span className="badge bg-success">{tags}</span>
          </h3>
          <div className="grid">
            <div className="row">
              <h4 className="col">
                Year:
                <span className="text-light m-3">{Item.Year}</span>
              </h4>
              <h4 className="col">
                Rated:
                <span className="text-light m-3">{Item.Rated}</span>
              </h4>
            </div>
            <div className="row">
              <h4 className="col">
                Released:
                <span className="text-light m-3">{Item.Released}</span>
              </h4>
              <h4 className="col">
                Duration:
                <span className="text-light m-3">{Item.Runtime}</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="grid cast m-3">
          <h1>
            <span class="badge bg-info ">Cast and Crew</span>
          </h1>
          <h4>
            Director:
            <span className="text-light m-3">{Item.Director}</span>
          </h4>
          <h4>
            Writer:
            <span className="text-light m-3">{Item.Writer}</span>
          </h4>
          <h4>
            Actors:
            <span className="text-light m-3">{Item.Actors}</span>
          </h4>
          <h4>
            Language:
            <span className="text-light m-3">{Item.Language}</span>
          </h4>
          <h4>
            Country:
            <span className="text-light m-3">{Item.Country}</span>
          </h4>
        </div>
        <div className="achievements m-3">
          <h1>
            <span class="badge bg-success ">Awards</span>
          </h1>
          <h4>{Item.Awards}</h4>

          <h4>
            imdbVotes:
            <span className="text-light m-3">{Item.imdbVotes}</span>
          </h4>
          <h4>
            imdbVotes:
            <span className="text-light m-3">{Item.BoxOffice}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;