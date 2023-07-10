import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import AuthConext from '../../store/auth-context';

const Navigation = (props: any) => {
	const ctx = useContext(AuthConext);

	return (
		/*<AuthConext.Consumer>
			{ctx => {
				return (*/
		<nav className={classes.nav}>
			<ul>
				{ctx.isLoggedIn && (
					<li>
						<a href="/">Users</a>
					</li>
				)}
				{ctx.isLoggedIn && (
					<li>
						<a href="/">Admin</a>
					</li>
				)}
				{ctx.isLoggedIn && (
					<li>
						<button onClick={ctx.onLogout}>Logout</button>
					</li>
				)}
			</ul>
		</nav>
		/*);
			}}
		</AuthConext.Consumer>*/
	);
};

export default Navigation;
