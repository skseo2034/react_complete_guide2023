import React, { useState, useEffect, useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthConext from './store/auth-context';

function App() {
	/*const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

		if (storedUserLoggedInInformation === '1') {
			setIsLoggedIn(true);
		}
	}, []);

	const loginHandler = (email: string, password: string) => {
		// We should of course check email and password
		// But it's just a dummy/ demo anyways
		localStorage.setItem('isLoggedIn', '1');
		setIsLoggedIn(true);
	};

	const logoutHandler = () => {
		localStorage.removeItem('isLoggedIn');
		setIsLoggedIn(false);
	};*/

	const ctx = useContext(AuthConext);
	return (
		/*<AuthConext.Provider value={{ isLoggedIn: isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler }}>*/
		<>
			<MainHeader />
			<main>
				{!ctx.isLoggedIn && <Login />}
				{ctx.isLoggedIn && <Home />}
			</main>
		</>
		/*</AuthConext.Provider>*/
	);
}

export default App;
