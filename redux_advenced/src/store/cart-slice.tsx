import { Actions, createSlice, Dispatch, SliceCaseReducers } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';

interface itemType {
	id: string;
	price: number;
	quantity: number;
	totalPrice: number;
	name: string;
}

interface initialSateType {
	items: itemType[];
	totoalQuantity: number;
	totalAmount: number;
}

const cartSlice = createSlice<initialSateType, SliceCaseReducers<any>, string>({
	name: 'cart',
	initialState: { items: [], totoalQuantity: 0, totalAmount: 0 },
	reducers: {
		addItemToCart(state, action) {
			state.totoalQuantity++;
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
			state.totoalQuantity--;
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

export const sendCartData = (cart: any) => {
	return async (dispatch: any) => {
		dispatch(
			uiActions.showNotifaction({
				status: 'pending',
				title: 'Sending...',
				message: 'Sending cart data!',
			})
		);

		const sendRequest = async () => {
			const response = await fetch('https://react-http-93000-default-rtdb.firebaseio.com/cart.json', {
				method: 'PUT',
				body: JSON.stringify(cart),
			});

			if (!response.ok) {
				console.log('throw error');
				throw new Error('Sending cart data failed!');
			}
		};

		try {
			await sendRequest();
		} catch (error: any) {
			dispatch(
				uiActions.showNotifaction({
					status: 'error',
					title: 'Error!',
					message: error.message, // 'Sending cart data failed!'
				})
			);
		}

		dispatch(
			uiActions.showNotifaction({
				status: 'success',
				title: 'Success!',
				message: 'Sent cart data successfully!',
			})
		);
	};
};

export const cartActions = cartSlice.actions;

export default cartSlice;
