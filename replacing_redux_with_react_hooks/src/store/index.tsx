// import { createStore } from 'redux';
import { createSlice, PayloadAction, createStore, configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-slice';
import authReducer from './auth-slice';

/*const counterReducer = (state: any = initialState, action: any) => {
	if (action.type === 'increment') {
		return {
			counter: state.counter + 1,
			// 실제 showCounter 하고 관계 없다 하더라고 반환해야 한다.
			// 기존 상태는 머지 되지 않는다.
			// 여기서 반환한 상태로 대체 됨으로 객체에 함께 반환해야 한다.
			showCounter: state.showCounter,
		};
	}

	if (action.type === 'increse') {
		return {
			// counter: state.counter + action.amountObj.amt1 + action.amountObj.amt2,
			counter: state.counter + action.amount,
			showCounter: state.showCounter,
		};
	}

	if (action.type === 'decrement') {
		return {
			counter: state.counter - 1,
			showCounter: state.showCounter,
		};
	}

	if (action.type === 'toggle') {
		return {
			counter: state.counter,
			showCounter: !state.showCounter,
		};
	}

	return state;
};*/

// const store = createStore(counterSlice.reducer);
const store = configureStore({
	// reducer: counterSlice.reducer,
	reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
