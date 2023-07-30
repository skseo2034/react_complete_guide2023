import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';

interface notificationType {
	status: string;
	title: string;
	message: string;
}

interface initialSateType {
	cartIsVisible: boolean;
	notification: notificationType | null;
}

const uiSlice = createSlice<initialSateType, SliceCaseReducers<any>, string>({
	name: 'ui',
	initialState: { cartIsVisible: false, notification: null },
	reducers: {
		toggler(state) {
			state.cartIsVisible = !state.cartIsVisible;
		},
		showNotifaction(state, action) {
			state.notification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message,
			};
		},
	},
});

export const uiActions = uiSlice.actions;

export default uiSlice;
