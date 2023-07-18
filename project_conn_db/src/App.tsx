import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
	const [movies, setMovies] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
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

	const fetchMoviesHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);

		// fetch 는 404, 401 코드를 받아도 정상으로 처리한다. 즉 catch 에 잡히지 않는다.
		// 따로 처리를 해 주어야 한다. 반면 axios 는 에러로 처리를 한다.
		try {
			// const response = await fetch('https://swapi.py4e.com/api/films/');
			const response = await fetch('https://react-http-93000-default-rtdb.firebaseio.com/movies.json');

			console.log('response', response);

			// response.json() 전에 체크해야 함.
			if (!response.ok) {
				throw new Error('Something went wrong!');
			}
			console.log('response.json', response);
			const data = await response.json();

			// firebase 라서 이렇게 처리를 더 하는것임.
			const loadedMovies = [];

			for (const key in data) {
				loadedMovies.push({
					id: key,
					title: data[key].title,
					openingText: data[key].openingText,
					releaseDate: data[key].releaseDate,
				});
			}

			setMovies(loadedMovies);
		} catch (error: any) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchMoviesHandler().then(r => {
			// dummy then
		});
	}, [fetchMoviesHandler]);

	async function addMovieHandler(movie: any) {
		const response = await fetch('https://react-http-93000-default-rtdb.firebaseio.com/movies.json', {
			method: 'POST',
			body: JSON.stringify(movie),
			headers: {
				'Content-Type': 'applicaton/json',
			},
		});

		const data = response.json();
		console.log(data);
	}

	let content = <p>Found no movies</p>;

	if (movies.length > 0) {
		content = <MoviesList movies={movies} />;
	}

	if (error) {
		content = <p>{error}</p>;
	}

	if (isLoading) {
		content = <p>Loading...</p>;
	}
	return (
		<React.Fragment>
			<section>
				<AddMovie onAddMovie={addMovieHandler} />
			</section>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>
				{/*{!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
				{!isLoading && !error && movies.length === 0 && <p>Found no movies</p>}
				{isLoading && <p>Loading...</p>}
				{!isLoading && error && <p>{error}</p>}*/}
				{content}
			</section>
		</React.Fragment>
	);
}

export default App;
