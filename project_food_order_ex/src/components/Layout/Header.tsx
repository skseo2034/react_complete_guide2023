import React, { FC } from 'react';
import classes from './Header.module.css';

import mealsImage from '../../assets/images/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

interface Props {
	onShownCart: () => void;
}

const Header: FC<Props> = ({ onShownCart }) => {
	return (
		<>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onShownCart={onShownCart} />
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt="A table full of delicious food!" />
			</div>
		</>
	);
};

export default Header;
