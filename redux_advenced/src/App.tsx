import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import store from './store';
import { useEffect } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';
import { sendCartData } from './store/cart-slice';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';

let isInitial = true;

function App() {
	const dispatch = useDispatch<Dispatch<any>>();
	const showCart = useSelector((state: any) => state.ui.cartIsVisible);
	const cart = useSelector((state: any) => state.cart);
	const notification = useSelector((state: any) => state.ui.notification);

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}

		dispatch(sendCartData(cart));
	}, [cart, dispatch]);

	/*useEffect(() => {
		const sendCartDate = async () => {
			dispatch(
				uiActions.showNotifaction({
					status: 'pending',
					title: 'Sending...',
					message: 'Sending cart data!',
				})
			);
			const response = await fetch('https://react-http-93000-default-rtdb.firebaseio.com/cart.json', {
				method: 'PUT',
				body: JSON.stringify(cart),
			});

			if (!response.ok) {
				console.log('throw error');
				throw new Error('Sending cart data failed!');
			}

			dispatch(
				uiActions.showNotifaction({
					status: 'success',
					title: 'Success!',
					message: 'Sent cart data successfully!',
				})
			);

			const responseData = await response.json();
		};

		if (isInitial) {
			isInitial = false;
			return;
		}
		sendCartDate().catch(error => {
			dispatch(
				uiActions.showNotifaction({
					status: 'error',
					title: 'Error!',
					message: error.message, // 'Sending cart data failed!'
				})
			);
		});
	}, [cart, dispatch]);*/

	return (
		<>
			{notification && (
				<Notification status={notification.status} title={notification.title} message={notification.message} />
			)}
			<Layout>
				{showCart && <Cart />}
				<Products />
			</Layout>
		</>
	);
}

export default App;
