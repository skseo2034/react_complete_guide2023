import React, { FC, useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

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

	return (
		<Modal onHideCart={onHideCart}>
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
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={onHideCart}>
					Close
				</button>
				{hasItems && <button className={classes.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
