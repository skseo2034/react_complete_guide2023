import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Card from './components/UI/Card';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './store/CartProvider';

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	const shownCardHandler = () => {
		setCartIsShown(true);
	};

	const hideCardHandler = () => {
		setCartIsShown(false);
	};

	return (
		<CartProvider>
			{cartIsShown && <Cart onShownCart={shownCardHandler} onHideCart={hideCardHandler} />}
			<Header onShownCart={shownCardHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
