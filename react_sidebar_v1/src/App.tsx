import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/products" element={<Products />}></Route>
					<Route path="/reports" element={<Reports />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
