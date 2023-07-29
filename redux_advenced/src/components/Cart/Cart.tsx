import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import cartSlice from '../../store/cart-slice';

interface itemType {
	id: string;
	price: number;
	quantity: number;
	totalPrice: number;
	name: string;
}

const Cart = (props: any) => {
	const cartItems = useSelector((state: any) => state.cart.items);
	console.log('cartItems', cartItems);

	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>
				{cartItems.map((item: itemType) => (
					<CartItem key={item.id} item={item} />
				))}
			</ul>
		</Card>
	);
};

export default Cart;
