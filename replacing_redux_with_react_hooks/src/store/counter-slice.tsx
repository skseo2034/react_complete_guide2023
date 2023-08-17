import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
	counter: 0,
	showCounter: true,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState: initialCounterState,
	reducers: {
		increment(state: any) {
			// tool-kit 는 상태를 직접 조작된다. 내부적으로 변경된 상태를 포착해서
			// 새로운 상태로 만들어 준다. redux 처럼 모든 상태를 반환 하기위해 정의해 줄 필요없다.
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		// increase(state, action: PayloadAction<{ amount: number }>) {
		increase(state, action) {
			// state.counter = state.counter + action.payload.amount;
			state.counter = state.counter + action.payload;
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
