import useInput from '../hooks/use-input';
import React from 'react';

const isNotEmpty = (value: string) => value.trim() !== '';
const isEmail = (value: string) => value.includes('@');

const BasicForm = (props: any) => {
	const {
		value: firstNameValue,
		isValid: firstNameIsValid,
		hasError: firstNameHasError,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: firstNameReset,
	} = useInput(isNotEmpty);
	const {
		value: lastNameValue,
		isValid: lastNameIsValid,
		hasError: lastNameHasError,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: lastNameReset,
	} = useInput(isNotEmpty);
	const {
		value: emailValue,
		isValid: emailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: emailReset,
	} = useInput(isEmail);

	let formIsValid = false;
	if (firstNameIsValid && lastNameIsValid && emailIsValid) {
		formIsValid = true;
	}

	const formSubmissionHandler = (event: React.FormEvent) => {
		event.preventDefault();

		if (!formIsValid) {
			return;
		}

		firstNameReset();
		lastNameReset();
		emailReset();
	};

	const firstNameInputClassed = firstNameHasError ? 'form-control invalid' : 'form-control';
	const lastNameInputClassed = lastNameHasError ? 'form-control invalid' : 'form-control';
	const emailInputClassed = emailHasError ? 'form-control invalid' : 'form-control';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className="control-group">
				<div className={firstNameInputClassed}>
					<label htmlFor="firstName">First Name</label>
					<input
						type="text"
						id="firstName"
						value={firstNameValue}
						onChange={firstNameChangeHandler}
						onBlur={firstNameBlurHandler}
					/>
					{firstNameHasError && <p className="error-text">Name must not be empty.</p>}
				</div>
				<div className={lastNameInputClassed}>
					<label htmlFor="lastName">Last Name</label>
					<input
						type="text"
						id="lastName"
						value={lastNameValue}
						onChange={lastNameChangeHandler}
						onBlur={lastNameBlurHandler}
					/>
					{lastNameHasError && <p className="error-text">Name must not be empty.</p>}
				</div>
			</div>
			<div className={emailInputClassed}>
				<label htmlFor="email">E-Mail Address</label>
				<input
					type="text"
					id="email"
					value={emailValue}
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
				/>
				{emailHasError && <p className="error-text">Email must have a '@'.</p>}
			</div>
			<div className="form-actions">
				<button type="submit" disabled={!formIsValid}>
					Submit
				</button>
			</div>
		</form>
	);
};

export default BasicForm;
