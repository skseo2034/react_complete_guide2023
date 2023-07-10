import React, { useEffect, useState } from 'react';

const AuthConext = React.createContext({
	isLoggedIn: false,
	onLogin: (email: string, password: string) => {
		//  ummy function App 에서 onLogin 합수를 제공 받아서 처리 됩니다.
	},
	onLogout: () => {
		//  dummy function App 에서 onLogout 합수를 제공 받아서 처리 됩니다.
	},
});

export const AuthContextProvider = (props: { children: React.ReactNode }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

		if (storedUserLoggedInInformation === '1') {
			setIsLoggedIn(true);
		}
	}, []);

	const logoutHandler = () => {
		localStorage.removeItem('isLoggedIn');
		setIsLoggedIn(false);
	};

	const loginHandler = () => {
		localStorage.setItem('isLoggedIn', '1');
		setIsLoggedIn(true);
	};

	return (
		<AuthConext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>
			{props.children}
		</AuthConext.Provider>
	);
};

export default AuthConext;
