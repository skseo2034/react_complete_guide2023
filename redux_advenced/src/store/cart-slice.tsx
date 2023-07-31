import { Actions, createSlice, Dispatch, SliceCaseReducers } from '@reduxjs/toolkit';

interface itemType {
	id: string;
	price: number;
	quantity: number;
	totalPrice: number;
	name: string;
}

interface initialSateType {
	items: itemType[];
	totalQuantity: number;
	totalAmount: number;
	changed: boolean;
}

const cartSlice = createSlice<initialSateType, SliceCaseReducers<any>, string>({
	name: 'cart',
	initialState: {
		items: [],
		totalQuantity: 0,
		totalAmount: 0,
		changed: false,
	},

	reducers: {
		replaceCart(state, action) {
			state.totalQuantity = action.payload.totalQuantity;
			state.items = action.payload.items;
		},
		addItemToCart(state, action) {
			console.log('addItemToCart running');
			console.log('addItemToCart', state.items);
			state.totalQuantity++;
			state.changed = true;
			// 하나씩 추가
			const newItem = action.payload;
			const exitingItem = state.items.find((item: itemType) => item.id === newItem.id);
			if (!exitingItem) {
				state.items.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					name: newItem.name,
				});
			} else {
				exitingItem.quantity++;
				exitingItem.totalPrice = exitingItem.totalPrice + newItem.price;
			}
		},
		removeItemFromCart(state, action) {
			console.log('removeItemFromCart running');
			state.totalQuantity--;
			state.changed = true;
			// 하나씩 제거
			const id = action.payload;
			const exitingItem = state.items.find((item: itemType) => item.id === id);
			if (exitingItem.quantity === 1) {
				state.items = state.items.filter((item: itemType) => item.id !== id);
			} else if (exitingItem.quantity > 1) {
				exitingItem.quantity--;
				exitingItem.totalPrice = exitingItem.totalPrice - exitingItem.price;
			}
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
