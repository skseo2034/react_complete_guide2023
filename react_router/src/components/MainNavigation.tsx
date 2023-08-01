import React from 'react';
import classes from './MainNavigation.module.css';
import { Link, NavLink } from 'react-router-dom';

const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						{/*<Link to="/">Home</Link>*/}
						<NavLink
							to="/"
							className={({ isActive }) => (isActive ? classes.active : undefined)}
							/*style={({ isActive }) => ({ textAlign: isActive ? 'center' : 'left' })}*/
							end
						>
							Home
						</NavLink>
					</li>
					<li>
						{/*<Link to="/products">Products</Link>*/}
						<NavLink to="/products" className={({ isActive }) => (isActive ? classes.active : undefined)}>
							Products
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
