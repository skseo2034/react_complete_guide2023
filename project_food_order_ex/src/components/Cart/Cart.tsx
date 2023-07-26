import React, { FC, useContext, useState } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

interface Props {
	onShownCart: () => void;
	onHideCart: () => void;
}

interface cartItemType {
	id: string;
	name: string;
	price: number;
	amount: number;
}

const Cart: FC<Props> = ({ onShownCart, onHideCart }) => {
	const [isCheckout, setIsCheckout] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [didSubmit, setDidSubmit] = useState(false);
	/*const cartItems = (
		<ul>
			{[{ id: 'c1', name: 'Kimbab', amount: 2, price: 12.99 }].map(item => (
				<li>{item.name}</li>
			))}
		</ul>
	);*/

	const cartCtx = useContext(CartContext);
	const cartItems = cartCtx.items;

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = (id: string) => {
		cartCtx.removeItem(id);
	};

	const cartItemAddHandler = (item: cartItemType) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const orderHandler = () => {
		setIsCheckout(true);
	};

	const submitOrderHandler = async (userData: any) => {
		setIsSubmitting(true);

		await fetch('https://react-http-93000-default-rtdb.firebaseio.com/orders.json', {
			method: 'POST',
			body: JSON.stringify({ user: userData, orderedItems: cartItems }),
		});

		setIsSubmitting(false);
		setDidSubmit(true);
		cartCtx.clearCart();
	};

	const modalActions = (
		<div className={classes.actions}>
			<button className={classes['button--alt']} onClick={onHideCart}>
				Close
			</button>
			{hasItems && (
				<button className={classes.button} onClick={orderHandler}>
					Order
				</button>
			)}
		</div>
	);

	const cartModalContent = (
		<>
			<ul className={classes['cart-items']}>
				{cartItems.map(item => (
					<CartItem
						key={item.id}
						item={item}
						onRemove={cartItemRemoveHandler.bind(null, item.id)}
						onAdd={cartItemAddHandler.bind(null, item)}
					/>
				))}
			</ul>
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={onHideCart} />}
			{!isCheckout && modalActions}
		</>
	);

	const isSubmittingModalContent = <p>Sending order data...</p>;
	const didSubmitModalContent = (
		<>
			<p>Successfully sent the order!</p>
			<div className={classes.actions}>
				<button className={classes.button} onClick={onHideCart}>
					Close
				</button>
			</div>
		</>
	);

	return (
		<Modal onHideCart={onHideCart}>
			{!isSubmitting && !didSubmit && cartModalContent}
			{isSubmitting && isSubmittingModalContent}
			{!isSubmitting && didSubmit && didSubmitModalContent}
		</Modal>
	);
};

export default Cart;
