import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Card from './components/UI/Card';
import Cart from './components/Cart/Cart';

function App() {
	return (
		<>
			<Cart />
			<Header />
			<main>
				<Meals />
			</main>
		</>
	);
}

export default App;
