import CartContext from './cart-context';
import { useReducer } from 'react';

interface cartItemType {
	id: string;
	name: string;
	price: number;
	amount: number;
}

const defaultCartSate = {
	items: [],
	totalAmount: 0,
};

const cartRuducer = (state: any, action: any) => {
	if (action.type === 'ADD') {
		const updatedItems = state.items.concat(action.item);
		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}

	if (action.type === 'REMOVE') {
		const updatedItems = state.items.filter((item: cartItemType) => item.id != action.id);

		const removeItem = state.items.find((item: cartItemType) => item.id == action.id);
		const updatedTotalAmount = state.totalAmount + removeItem.price * removeItem.amount;

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}
	return defaultCartSate;
};

const CartProvider = (props: { children: React.ReactNode }) => {
	const [cartSate, dispatchCartAction] = useReducer(cartRuducer, defaultCartSate);
	const addItemToCartHandler = (item: any) => {
		dispatchCartAction({ type: 'ADD', item: item });
	};
	const removeItemFromCartHander = (id: string) => {
		dispatchCartAction({ type: 'REMOVE', id: id });
	};

	const cartContext = {
		items: cartSate.items,
		totalAmount: cartSate.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHander,
	};
	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
