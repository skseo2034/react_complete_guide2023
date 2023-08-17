import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';

function App() {
	const isAuth = useSelector((state: any) => state.auth.isAuthenticate);

	return (
		<>
			<Header />
			{!isAuth && <Auth />}
			{isAuth && <UserProfile />}
			<Counter />
		</>
	);
}

export default App;
