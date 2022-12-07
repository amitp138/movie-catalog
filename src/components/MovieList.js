import React from 'react';

import MovieCard from './MovieCard';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies && props.movies.map((movie, index) => (
				<div className='image-container card m-3' key={index}>
					<MovieCard movie={movie} key={movie.imdbID} id={movie.imdbID} />
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay '
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
			{!props.movies && props.searchValue && "No results found"}
		</>
	);
};

export default MovieList;
