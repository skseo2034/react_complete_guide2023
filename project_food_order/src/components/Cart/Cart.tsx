import React, { FC } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

interface Props {
	onShownCart: () => void;
	onHideCart: () => void;
}

const Cart: FC<Props> = ({ onShownCart, onHideCart }) => {
	/*const cartItems = (
		<ul>
			{[{ id: 'c1', name: 'Kimbab', amount: 2, price: 12.99 }].map(item => (
				<li>{item.name}</li>
			))}
		</ul>
	);*/

	const cartItems = [{ id: 'c1', name: 'Kimbab', amount: 2, price: 12.99 }];

	return (
		<Modal onHideCart={onHideCart}>
			<ul className={classes['cart-items']}>
				{cartItems.map(item => (
					<li>item.name</li>
				))}
			</ul>
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>35.62</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={onHideCart}>
					Close
				</button>
				<button className={classes.button}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;
