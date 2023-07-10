import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthConext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state: any, action: any) => {
	if (action.type === 'USER_INPUT') {
		return { value: action.val, isValid: action.val.includes('@') };
	}

	if (action.type === 'USER_BLUR') {
		return { value: state.value, isValid: state.value.includes('@') };
	}
	return { value: '', isValid: false };
};

const passReducer = (state: any, action: any) => {
	if (action.type === 'PASSWORD_INPUT') {
		return { value: action.val, isValid: action.val.trim().length > 6 };
	}
	if (action.type === 'PASSWORD_BLUR') {
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

	const authCtx = useContext(AuthConext);

	const emailInputRef = useRef<HTMLInputElement>(null);
	const passworkdInputRef = useRef<HTMLInputElement>(null);

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
		dispatchPassword({ type: 'PASSWORD_INPUT', val: event.target.value });

		setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
	};

	const validateEmailHandler = () => {
		// setEmailIsValid(emailState.isValid);
		dispatchEmail({ type: 'USER_BLUR' });
	};

	const validatePasswordHandler = () => {
		// setPasswordIsValid(enteredPassword.trim().length > 6);

		dispatchPassword({ type: 'PASSWORD_BLUR' });
	};

	const submitHandler = (event: any) => {
		event.preventDefault();
		if (formIsValid) {
			authCtx.onLogin(emailState.value, passwordState.value);
		} else if (!emailState.isValid) {
			if (emailInputRef.current) {
				emailInputRef.current.focus();
			}
		} else if (passwordState.isValid) {
			if (passworkdInputRef.current) {
				passworkdInputRef.current.focus();
			}
		}
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					ref={emailInputRef}
					type="email"
					id="email"
					value={emailState.value}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
					isValid={emailState.isValid}
					label="E-Mail"
				/>
				<Input
					ref={passworkdInputRef}
					type="password"
					id="password"
					value={passwordState.value}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
					isValid={passwordState.isValid}
					label="E-Password"
				/>

				<div className={classes.actions}>
					{/*<Button type="submit" className={classes.btn} disabled={!formIsValid}>*/}
					<Button type="submit" className={classes.btn}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
