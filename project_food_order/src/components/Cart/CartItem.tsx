import classes from './CartItem.module.css';
import { FC } from 'react';

interface cartItemType {
	id: string;
	name: string;
	price: number;
	amount: number;
}

interface Props {
	item: cartItemType;
	onRemove: () => void;
	onAdd: () => void;
}

const CartItem: FC<Props> = ({ item, onRemove, onAdd }) => {
	const price = `$${item.price.toFixed(2)}`;

	return (
		<li className={classes['cart-item']}>
			<div>
				<h2>{item.name}</h2>
				<div className={classes.summary}>
					<span className={classes.price}>{price}</span>
					<span className={classes.amount}>x {item.amount}</span>
				</div>
			</div>
			<div className={classes.actions}>
				<button onClick={onRemove}>−</button>
				<button onClick={onAdd}>+</button>
			</div>
		</li>
	);
};

export default CartItem;
