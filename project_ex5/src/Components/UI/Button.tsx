import React, { FC } from 'react';
import classes from './Button.module.css';

interface Props {
	type?: 'submit' | 'reset' | 'button' | undefined;
	onClick?: () => void;
	children: React.ReactNode;
}

const Button: FC<Props> = ({ type, onClick, children }) => {
	return (
		<button className={classes.button} type={type || 'button'} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
