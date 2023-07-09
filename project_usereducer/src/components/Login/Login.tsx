import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state: any, action: any) => {
	if (action.type === 'USER_INPUT') {
		return { value: action.val, isValid: action.val.include('@') };
	}

	if (action.type === 'USER_BLUR') {
		return { value: state.value, isValid: state.value.include('@') };
	}
	return { value: '', isValid: false };
};

const passReducer = (state: any, action: any) => {
	if (action.type === 'USER_PASSWORD') {
		return { value: action.val, isValid: action.val.trim().length > 6 };
	}
	if (action.type === 'USER_BLUR') {
		return { value: state.value, isValid: state.value.trim().length > 6 };
	}
	return { value: '', isValid: false };
};

const Login = (props: any) => {
	// const [enteredEmail, setEnteredEmail] = useState('');
	// const [emailIsValid, setEmailIsValid] = useState<boolean>();
	// const [enteredPassword, setEnteredPassword] = useState('');
	// const [passwordIsValid, setPasswordIsValid] = useState<boolean>();
	const [formIsValid, setFormIsValid] = useState<boolean>(false);

	const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: false });
	const [passwordState, dispatchPassword] = useReducer(passReducer, { value: '', isValid: false });

	useEffect(() => {
		console.log('EFFECT RUNNING');

		return () => {
			console.log('EFFECT CLEANUP');
		};
	}, []);

	// const { isValid: emailIsValid } = emailState;
	// const { isValid: passwordIsValid } = passwordState;

	useEffect(() => {
		const identifier = setTimeout(() => {
			console.log('Checking form validity!');
			// setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
			// setFormIsValid(emailState.isValid && passwordState.isValid);
			// setFormIsValid(emailIsValid && passwordIsValid);
			setFormIsValid(emailState.isValid && passwordState.isValid);
		}, 500);

		return () => {
			console.log('CLEANUP');
			clearTimeout(identifier);
		};
		// }, [emailState, passwordState]); // email 과 password 가 바뀔때 마다 실행된다.
		// }, [emailIsValid, passwordIsValid]); // email 과 password 가 바뀔때 마다 실행 되는 것을 리팩토링 해서 valid 가 바뀔때 마다 실행 되게 함.
	}, [emailState.isValid, passwordState.isValid]); // 구조분해 하지 않고 이렇게 사용해도 된다.

	const emailChangeHandler = (event: any) => {
		// setEnteredEmail(event.target.value);

		dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

		// setFormIsValid(event.target.value.includes('@') && passwordState.isValid);
	};

	const passwordChangeHandler = (event: any) => {
		// setEnteredPassword(event.target.value);
		dispatchPassword({ type: 'USER_PASSWORD', val: event.target.value });

		setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
	};

	const validateEmailHandler = () => {
		// setEmailIsValid(emailState.isValid);
		dispatchEmail({ type: 'INPUT_BLUR' });
	};

	const validatePasswordHandler = () => {
		// setPasswordIsValid(enteredPassword.trim().length > 6);

		dispatchPassword({ type: 'INPUT_BLUR' });
	};

	const submitHandler = (event: any) => {
		event.preventDefault();
		props.onLogin(emailState.value, emailState.value);
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''}`}>
					<label htmlFor="email">E-Mail</label>
					<input
						type="email"
						id="email"
						value={emailState.value}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>
				</div>
				<div className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''}`}>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={passwordState.value}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
				</div>
				<div className={classes.actions}>
					<Button type="submit" className={classes.btn} disabled={!formIsValid}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
