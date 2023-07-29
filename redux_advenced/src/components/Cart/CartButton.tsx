import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import cartSlice from '../../store/cart-slice';

const CartButton = (props: any) => {
	const dispatch = useDispatch();
	const cartQuantity = useSelector((state: any) => state.cart.totoalQuantity);

	const toggleCartHandler = () => {
		console.log('toggleCartHandler click');
		dispatch(uiActions.toggler());
	};

	return (
		<button className={classes.button} onClick={toggleCartHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{cartQuantity}</span>
		</button>
	);
};

export default CartButton;
