import React, { ReactElement, useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
	const [meals, setMeals] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	/*useEffect(() => {
		const fetchMeals = async () => {
			console.log('fetchMeals Running');
			// const response = await fetch('https://swapi.py4e.com/api/films/');
			const response = await fetch('https://react-http-93000-default-rtdb.firebaseio.com/meals.json');

			// response.json() 전에 체크해야 함.
			if (!response.ok) {
				// throw new Error('Something went wrong!');
				alert('식사 정보를 가지고 오던 중 오류가 발생 했습니다.');
			}

			const data = await response.json();

			// firebase 라서 이렇게 처리를 더 하는것임.
			const loadedMeals = [];

			for (const key in data) {
				loadedMeals.push({
					id: key,
					name: data[key].name,
					description: data[key].description,
					price: data[key].price,
				});
			}

			setMeals(loadedMeals);
		};

		fetchMeals().then(res => {
			// dummy
		});
	}, []);*/
	const fetchMeals = async () => {
		try {
			setIsLoading(true);
			const response = await fetch('https://react-http-93000-default-rtdb.firebaseio.com/meals.json');

			// response.json() 전에 체크해야 함.
			if (!response.ok) {
				throw new Error('Something went wrong!');
				// alert('식사 정보를 가지고 오던 중 오류가 발생 했습니다.');
			}

			const data = await response.json();

			// firebase 라서 이렇게 처리를 더 하는것임.
			const loadedMeals = [];

			for (const key in data) {
				loadedMeals.push({
					id: key,
					name: data[key].name,
					description: data[key].description,
					price: data[key].price,
				});
			}

			setMeals(loadedMeals);
			// setIsLoading(false);
		} catch (error: any) {
			// alert('식사 정보를 가지고 오던 중 오류가 발생 했습니다.\n 오류메시지 : ' + error.message);
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchMeals().then(r => {
			// dummy
		});
		/*fetchMeals().catch(error => {
			setIsLoading(false);
			setError(error.message);
		});*/
	}, []);

	/*useEffect(() => {
		console.log('useEffect Running');
		fetch('https://react-http-93000-default-rtdb.firebaseio.com/meals.json')
			.then(response => {
				if (!response.ok) {
					// throw new Error('Something went wrong!');
					alert('식사 정보를 가지고 오던 중 오류가 발생 했습니다.');
					return;
				}

				return response.json();
			})
			.then(data => {
				const loadedMeals = [];

				for (const key in data) {
					loadedMeals.push({
						id: key,
						name: data[key].name,
						description: data[key].description,
						price: data[key].price,
					});
				}
				setMeals(loadedMeals);
			})
			.catch(error => {
				alert('식사 정보를 가지고 오던 중 오류가 발생 했습니다.\n 오류메시지 : ' + error.message);
			});
	}, []);*/

	/*const fetchMeals = async () => {
		console.log('fetchMeals Running');
		// const response = await fetch('https://swapi.py4e.com/api/films/');
		const response = await fetch('https://react-http-93000-default-rtdb.firebaseio.com/meals.json');

		// response.json() 전에 체크해야 함.
		if (!response.ok) {
			// throw new Error('Something went wrong!');
			alert('식사 정보를 가지고 오던 중 오류가 발생 했습니다.');
		}

		const data = await response.json();

		return data;

		// firebase 라서 이렇게 처리를 더 하는것임.
	};
	useEffect(() => {
		console.log('useEffect Running');
		// fetchAPI();
		fetchMeals()
			.then(data => {
				const loadedMeals = [];

				for (const key in data) {
					loadedMeals.push({
						id: key,
						name: data[key].name,
						description: data[key].description,
						price: data[key].price,
					});
				}
				setMeals(loadedMeals);
			})
			.catch(error => {
				alert('식사 정보를 가지고 오던 중 오류가 발생 했습니다.\n 오류메시지 : ' + error.message);
			});
	}, []);*/

	/*const clickHandler = useCallback(() => {
		console.log('clickHandler Running');
		fetchMeals()
			.then(data => {
				const loadedMeals = [];

				for (const key in data) {
					loadedMeals.push({
						id: key,
						name: data[key].name,
						description: data[key].description,
						price: data[key].price,
					});
				}
				setMeals(loadedMeals);
			})
			.catch(error => {
				alert('식사 정보를 가지고 오던 중 오류가 발생 했습니다.\n 오류메시지 : ' + error.message);
			});
	}, []);*/

	let content: any = <p>Found no Meals</p>;

	if (meals.length > 0) {
		content = meals.map(meal => (
			<MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />
		));
	}

	if (error) {
		content = <p>{error}</p>;
	}

	if (isLoading) {
		content = <p>Loading....</p>;
	}

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{content}</ul>
			</Card>
			{/*<button onClick={fetchMeals}>조회</button>*/}
		</section>
	);
};

export default AvailableMeals;
