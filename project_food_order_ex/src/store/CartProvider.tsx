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
		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

		const existingCartItemIndex = state.items.findIndex((item: cartItemType) => item.id === action.item.id);

		const existingCartItem = state.items[existingCartItemIndex];

		let updatedItems;

		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.item.amount,
			};
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item);
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}

	if (action.type === 'REMOVE') {
		const existingCartItemIndex = state.items.findIndex((item: cartItemType) => item.id === action.id);
		const existingCartItem = state.items[existingCartItemIndex];

		const updatedTotalAmount = state.totalAmount - existingCartItem.price;

		let updatedItems;

		if (existingCartItem.amount === 1) {
			updatedItems = state.items.filter((item: cartItemType) => item.id !== action.id);
		} else {
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount - 1,
			};
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}

	if (action.type === 'CLEAR') {
		return defaultCartSate;
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

	const clearCartHandler = () => {
		dispatchCartAction({ type: 'CLEAR' });
	};

	const cartContext = {
		items: cartSate.items,
		totalAmount: cartSate.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHander,
		clearCart: clearCartHandler,
	};
	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
