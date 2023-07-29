import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart-slice';

interface itemType {
	id: string;
	price: number;
	quantity: number;
	totalPrice: number;
	name: string;
}

const CartItem = (props: { item: itemType }) => {
	const { id, price, quantity, totalPrice, name } = props.item;

	const dipatch = useDispatch();

	const addItemHandler = () => {
		dipatch(cartActions.addItemToCart({ id, price, name }));
	};

	const removeItemHandler = () => {
		dipatch(cartActions.removeItemFromCart(id));
	};

	return (
		<li className={classes.item}>
			<header>
				<h3>{name}</h3>
				<div className={classes.price}>
					${totalPrice.toFixed(2)} <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					x <span>{quantity}</span>
				</div>
				<div className={classes.actions}>
					<button onClick={removeItemHandler}>-</button>
					<button onClick={addItemHandler}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
