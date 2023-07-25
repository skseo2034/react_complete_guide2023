import React from 'react';

interface cartItemType {
	id: string;
	name: string;
	price: number;
	amount: number;
}

interface cartContextType {
	items: cartItemType[];
	totalAmount: number;
	addItem: (item: cartItemType) => void;
	removeItem: (id: string) => void;
}

const CartContext = React.createContext<cartContextType>({
	items: [],
	totalAmount: 0,
	addItem: (item: cartItemType) => {
		// dummy
	},
	removeItem: (id: string) => {
		// dummty
	},
});

export default CartContext;
