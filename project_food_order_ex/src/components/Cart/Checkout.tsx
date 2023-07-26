import classes from './Checkout.module.css';
import React, { FC, useRef, useState } from 'react';

interface Props {
	onCancel: () => void;
	onConfirm: (userData: any) => void;
}

/*const isEmpty = (value: string) => {
	return value.trim() === '';
};*/

const isEmpty = (value: string) => value.trim() === '';
const isFiveChars = (value: string) => value.trim().length === 5;

const Checkout: FC<Props> = ({ onCancel, onConfirm }) => {
	const [formInputsValidity, setFormInputsValidity] = useState({
		name: true,
		street: true,
		city: true,
		postalCode: true,
	});

	const nameInputRef = useRef<HTMLInputElement>(null);
	const streetInputRef = useRef<HTMLInputElement>(null);
	const postalInputRef = useRef<HTMLInputElement>(null);
	const cityInputRef = useRef<HTMLInputElement>(null);

	const confirmHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const enteredName = nameInputRef.current!.value;
		const enteredStreet = streetInputRef.current!.value;
		const enteredPostalCode = postalInputRef.current!.value;
		const enteredCity = cityInputRef.current!.value;

		const enteredNameIsValid = !isEmpty(enteredName);
		const enteredStreetIsValid = !isEmpty(enteredName);
		const enteredPostalIsValid = !isFiveChars(enteredName);
		const enteredCityIsValid = !isEmpty(enteredName);

		setFormInputsValidity({
			name: enteredNameIsValid,
			street: enteredStreetIsValid,
			city: enteredCityIsValid,
			postalCode: enteredPostalIsValid,
		});

		const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalIsValid && enteredCityIsValid;

		if (!formIsValid) {
			return;
		}

		// submit the cart data
		onConfirm({
			name: enteredName,
			street: enteredStreet,
			city: enteredCity,
			postalCode: enteredPostalCode,
		});
	};

	const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`;
	const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`;
	const postalControlClasses = `${classes.control} ${formInputsValidity.postalCode ? '' : classes.invalid}`;
	const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`;

	return (
		<form onSubmit={confirmHandler}>
			<div className={nameControlClasses}>
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name" ref={nameInputRef} />
				{!formInputsValidity.name && <p>Please enter a valid name!</p>}
			</div>
			<div className={streetControlClasses}>
				<label htmlFor="street">Street</label>
				<input type="text" id="street" ref={streetInputRef} />
				{!formInputsValidity.street && <p>Please enter a valid street!</p>}
			</div>
			<div className={postalControlClasses}>
				<label htmlFor="postal">Postal Code</label>
				<input type="text" id="postal" ref={postalInputRef} />
				{!formInputsValidity.postalCode && <p>Please enter a valid postal!</p>}
			</div>
			<div className={cityControlClasses}>
				<label htmlFor="city">City</label>
				<input type="text" id="city" ref={cityInputRef} />
				{!formInputsValidity.city && <p>Please enter a valid city!</p>}
			</div>
			<div className={classes.actions}>
				<button type="button" onClick={onCancel}>
					Cancel
				</button>
				<button className={classes.submit} type="submit">
					Confirm
				</button>
			</div>
		</form>
	);
};

export default Checkout;
