import { useDispatch, useSelector } from 'react-redux';

import classes from './Counter.module.css';
import { counterActions } from '../store/counter-slice';

const Counter = () => {
	// useSelector 가 store 에 구독을 자동 설정 한다.
	// 이 컴포넌트가 dom 에서 unamount 되면 구독이 자동으로 사라진다.
	const counter = useSelector((state: any) => state.counter.counter);
	const showCounter = useSelector((state: any) => state.counter.showCounter);

	const dispatch = useDispatch();

	const incrementHandler = () => {
		// dispatch({ type: 'increment' });
		dispatch(counterActions.increment());
	};

	const increseHandler = () => {
		// dispatch(counterActions.increase({ amount: 10 }));
		dispatch(counterActions.increase(10));
		// dispatch({ type: 'increse', amount: 5 });
		// dispatch({ type: 'increse', amount: 5, amount2: 10 });
		// dispatch({ type: 'increse', amountObj: { amt1: 5, amt2: 10 } });
	};

	const decrementHandler = () => {
		// dispatch({ type: 'decrement' });
		dispatch(counterActions.decrement());
	};

	const toggleCounterHandler = () => {
		// dispatch({ type: 'toggle' });
		dispatch(counterActions.toggleCounter());
	};

	console.log('showCounter', showCounter);
	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increseHandler}>Increment by 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			{/*counter 버튼의 visbile 를 관리한다. 로컬 state 로 관리해야 하나, demo 이므로 전역으로
			관리 한다고 가정한다.*/}
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
