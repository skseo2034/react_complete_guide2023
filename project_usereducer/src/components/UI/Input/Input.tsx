import React, { FC, RefObject, useImperativeHandle, useRef } from 'react';
import classes from './Input.module.css';

interface Props {
	type: string;
	id: string;
	value: string;
	onChange: (event: any) => void;
	onBlur: () => void;
	isValid: boolean;
	label: string;
	ref: RefObject<HTMLInputElement>;
}

const Input = React.forwardRef((props: Props, ref) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const activate = () => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	useImperativeHandle(ref, () => {
		return {
			focus: activate,
		};
	});

	return (
		<div className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`}>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				type={props.type}
				id={props.id}
				value={props.value}
				onChange={props.onChange}
				onBlur={props.onBlur}
				ref={inputRef}
			/>
		</div>
	);
});

export default Input;
