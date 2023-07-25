import React, { FC } from 'react';
import classes from './Input.module.css';

interface Props {
	label: string;
	input: any;
}

const Input = React.forwardRef((props: { label: string; input: any }, ref) => {
	return (
		<div className={classes.input}>
			<label htmlFor={props.input.id}>{props.label}</label>
			<input ref={ref} {...props.input} />
		</div>
	);
});

export default Input;
