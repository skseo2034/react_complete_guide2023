import { useDispatch, useSelector } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
	// useSelector 가 store 에 구독을 자동 설정 한다.
	// 이 컴포넌트가 dom 에서 unamount 되면 구독이 자동으로 사라진다.
	const counter = useSelector((state: any) => state.counter);

	const dispatch = useDispatch();

	const toggleCounterHandler = () => {
		// dummy
	};

	const incrementHandler = () => {
		dispatch({ type: 'increment' });
	};

	const decrementHandler = () => {
		dispatch({ type: 'decrement' });
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{counter}</div>
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
