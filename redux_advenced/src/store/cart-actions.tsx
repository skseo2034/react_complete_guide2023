import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';
import cart from '../components/Cart/Cart';

export const fetchCartData = () => {
	return async (dispatch: any) => {
		dispatch(
			uiActions.showNotifaction({
				status: 'fetchinging',
				title: 'Fetching...',
				message: 'Fetching cart data!',
			})
		);

		const fetchData = async () => {
			const response = await fetch('https://react-http-93000-default-rtdb.firebaseio.com/cart.json');

			if (!response.ok) {
				console.log('throw error');
				throw new Error('Fecthing cart data failed!');
			}

			const data = await response.json();

			return data;
		};

		try {
			const cartData = await fetchData();
			// console.log('cartData', cartData);
			dispatch(
				cartActions.replaceCart({
					items: cartData.items ? cartData.items : [],
					totalQuantity: cartData.totalQuantity,
				})
			);
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
				message: 'Fetched cart data successfully!',
			})
		);
	};
};

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
				body: JSON.stringify({
					items: cart.items,
					totalQuantity: cart.totalQuantity,
				}),
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
