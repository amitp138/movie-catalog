import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";
import { getAPI } from "./Config/GetApi";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("mars");

  useEffect(() => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

    getAPI(url)
      .then((responseJson) => {
        console.log(responseJson.data.Search);
        setMovies(responseJson.data.Search);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };
  const Search = () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

    getAPI(url)
      .then((responseJson) => {
        console.log(responseJson.data.Search);
        setMovies(responseJson.data.Search);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  function onKeyDown(e) {
    if (e.keyCode === 13) {
      Search();
    }
  }
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center ">
        <MovieListHeading heading="Movies" />
        <SearchBox
          onKeyDown={onKeyDown}
          Search={Search}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourites}
          searchValue={searchValue}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favourites" />
      </div>
      <div className="row">
        <MovieList
          movies={favourites}
          handleFavouritesClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourites}
        />
      </div>
    </div>
  );
};

export default App;
