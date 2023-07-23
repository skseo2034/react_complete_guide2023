import React, { useEffect, useState } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props: any) => {
	const {
		value: enteredName,
		isValid: nameIsValid,
		hasError: nameHasError,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		reset: nameReset,
	} = useInput(value => value.trim() !== '');

	const {
		value: enteredEmail,
		isValid: emailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: emailReset,
	} = useInput(value => value.trim() !== '' && value.includes('@'));
	// const nameInputRef = useRef<HTMLInputElement>(null);
	// const [enteredName, setEnteredName] = useState('');
	// const [enteredNameTouched, setEnteredNameTouched] = useState(false);

	// const [enteredEmail, setEnteredEmail] = useState('');
	// const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
	// const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);

	// const [formIsValid, setFormIsValid] = useState(false);

	// const enteredNameIsValid = enteredName.trim() !== '';
	// const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

	// const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@');

	/*useEffect(() => {
		if (enteredNameIsValid && enteredEmailIsValid) {
			setFormIsValid(true);
		} else {
			setFormIsValid(false);
		}
	}, [enteredNameIsValid, enteredEmailIsValid]);*/

	let formIsValid = false;
	if (nameIsValid && emailIsValid) {
		formIsValid = true;
	}

	/*const enteredNameIsValid = enteredName.trim() !== '';
	const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;*/

	/*const nameInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredName(event.target.value);

		/!*if (event.target.value.trim() !== '') {
			setEnteredNameIsValid(true);
		}*!/
	};*/
	/*const nameInputBlurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredNameTouched(true);
		/!*if (enteredName.trim() === '') {
			setEnteredNameIsValid(false);
		}*!/
	};*/

	const formSubmissionHandler = (event: React.FormEvent) => {
		event.preventDefault();

		//	setEnteredNameTouched(true);
		//	setEnteredEmailTouched(true);

		if (!nameIsValid || !emailIsValid) {
			return;
		}
		/*if (enteredName.trim() === '') {
			setEnteredNameIsValid(false);
			return;
		}*/

		// setEnteredNameIsValid(true);

		// console.log('enteredName', enteredName);

		/*const enteredValue = nameInputRef.current!.value;
		console.log('enteredValue', enteredValue);*/

		// 이렇게 할수 있으나, 하지 말아야 한다.
		// 이것은 바닐라 javascript 로 직접 dom 을 제어하는 것이다.
		// 직접 조작하는것은 이상적이지 않은 방식이다.
		// React 가 제어하게 해야 한다.
		// nameInputRef.current!.value = '';

		nameReset();
		emailReset();
		/*setEnteredName('');
		setEnteredNameTouched(false);
		setEnteredEmail('');
		setEnteredEmailTouched(false);*/
	};

	const nameInputClassed = nameHasError ? 'form-control invalid' : 'form-control';
	const emailInputClassed = emailHasError ? 'form-control invalid' : 'form-control';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClassed}>
				<label htmlFor="name">Your Name</label>
				<input
					/*ref={nameInputRef}*/
					type="text"
					id="name"
					onChange={nameChangeHandler}
					value={enteredName}
					onBlur={nameBlurHandler}
				/>
				{nameHasError && <p className="error-text">Name must not be empty.</p>}
			</div>
			<div className={emailInputClassed}>
				<label htmlFor="name">Your Email</label>
				<input
					type="text"
					id="age"
					onChange={emailChangeHandler}
					value={enteredEmail}
					onBlur={emailBlurHandler}
				/>
				{emailHasError && <p className="error-text">Email must not be empty and include '@'</p>}
			</div>
			<div className="form-actions">
				<button type="submit" disabled={!formIsValid}>
					Submit
				</button>
			</div>
		</form>
	);
};

export default SimpleInput;
