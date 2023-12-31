import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

interface itemType {
	id: string;
	price: number;
	quantity: number;
	totalPrice: number;
	name: string;
}

const ProductItem = (props: { id: string; title: string; price: number; description: string }) => {
	const { id, title, price, description } = props;

	const dispatch = useDispatch();

	const addToCartHandler = () => {
		dispatch(
			cartActions.addItemToCart({
				/*id: id,
				price: price,
				title: title,*/
				id,
				price,
				name: title,
			})
		);
	};

	return (
		<li className={classes.item}>
			<Card>
				<header>
					<h3>{title}</h3>
					<div className={classes.price}>${price.toFixed(2)}</div>
				</header>
				<p>{description}</p>
				<div className={classes.actions}>
					<button onClick={addToCartHandler}>Add to Cart</button>
				</div>
			</Card>
		</li>
	);
};

export default ProductItem;
