import { createStore } from 'redux';

const initialSate = {
	counter: 0,
};

const counterReducer = (state: any = initialSate, action: any) => {
	if (action.type === 'increment') {
		return {
			counter: state.counter + 1,
		};
	}

	if (action.type === 'decrement') {
		return {
			counter: state.counter - 1,
		};
	}
	return state;
};

const store = createStore(counterReducer);

export default store;
