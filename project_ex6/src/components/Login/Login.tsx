import React, { useEffect, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props: any) => {
	const [enteredEmail, setEnteredEmail] = useState('');
	const [emailIsValid, setEmailIsValid] = useState<boolean>();
	const [enteredPassword, setEnteredPassword] = useState('');
	const [passwordIsValid, setPasswordIsValid] = useState<boolean>();
	const [formIsValid, setFormIsValid] = useState(false);

	/*useEffect(() => {
		console.log('EFFECT RUUNNING');
	}); // 의존성이 없다. 모든 상태 변경마다 실행이 된다.

	useEffect(() => {
		console.log('EFFECT RUUNNING1');
	}, []); // 빈 배열 마운트 될때 실행

	useEffect(() => {
		console.log('EFFECT RUUNNING2');
		return () => {
			console.log('EFFECT CLEANUP');
		};
	}, [enteredPassword]); // 의존성 추가 마운트 될때 와 의존된 값이 바뀔때 마다 실행

	useEffect(() => {
		const identifier = setTimeout(() => {
			console.log('Checking form validity!');
			setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
		}, 500); // 변경이 있을때 마다 체킹 하는것이 아니라..500ms 동안 입력 멈추면 체크하겠다는 의미.

		return () => {
			console.log('CLEANUP');
			clearTimeout(identifier);
		};
	}, [enteredEmail, enteredPassword]);*/

	const emailChangeHandler = (event: any) => {
		setEnteredEmail(event.target.value);
		setFormIsValid(event.target.value.includes('@') && enteredPassword.trim().length > 6);
	};

	const passwordChangeHandler = (event: any) => {
		setEnteredPassword(event.target.value);
		setFormIsValid(event.target.value.trim().length > 6 && enteredEmail.includes('@'));
	};

	const validateEmailHandler = () => {
		setEmailIsValid(enteredEmail.includes('@'));
	};

	const validatePasswordHandler = () => {
		setPasswordIsValid(enteredPassword.trim().length > 6);
	};

	const submitHandler = (event: any) => {
		event.preventDefault();
		props.onLogin(enteredEmail, enteredPassword);
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''}`}>
					<label htmlFor="email">E-Mail</label>
					<input
						type="email"
						id="email"
						value={enteredEmail}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>
				</div>
				<div className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''}`}>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={enteredPassword}
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
