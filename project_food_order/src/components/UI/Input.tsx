import { FC } from 'react';
import classes from './Input.module.css';

interface Props {
	label: string;
	input: any;
}

const Input: FC<Props> = ({ label, input }) => {
	return (
		<div className={classes.input}>
			<label htmlFor={input.id}>{label}</label>
			<input {...input} />
		</div>
	);
};

export default Input;
