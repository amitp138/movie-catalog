import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container card m-3' style={{width:"25vw",height:"60vh"}}>
					<MovieCard movie={movie} key={movie.imdbID} id={movie.imdbID} />
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay '
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
