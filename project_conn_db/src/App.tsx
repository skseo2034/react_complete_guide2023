import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	/*const fetchMoviesHandler = () => {
		fetch('https://swapi.py4e.com/api/films/')
			.then(response => {
				return response.json();
			})
			.then((data: any) => {
				const transformMovies = data.results.map((movieData: any) => {
					return {
						id: movieData.episode_id,
						title: movieData.title,
						openingText: movieData.opening_crawl,
						releaseDate: movieData.release_date,
					};
				});
				setMovies(transformMovies);
			})
			.catch(error => {
				console.log(error);
			});
	};*/

	const fetchMoviesHandler = async () => {
		setIsLoading(true);
		try {
			const response = await fetch('https://swapi.py4e.com/api/films/');
			const data = await response.json();

			const transformMovies = data.results.map((movieData: any) => {
				return {
					id: movieData.episode_id,
					title: movieData.title,
					openingText: movieData.opening_crawl,
					releaseDate: movieData.release_date,
				};
			});
			setMovies(transformMovies);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>
				{!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
				{!isLoading && movies.length === 0 && <p>Found no movies</p>}
				{isLoading && <p>Loading...</p>}
			</section>
		</React.Fragment>
	);
}

export default App;
