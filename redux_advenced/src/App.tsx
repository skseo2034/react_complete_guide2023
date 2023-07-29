import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import store from './store';

function App() {
	const showCart = useSelector((state: any) => state.ui.cartIsVisible);
	console.log('showCart', showCart);
	return (
		<Layout>
			{showCart && <Cart />}
			<Products />
		</Layout>
	);
}

export default App;
