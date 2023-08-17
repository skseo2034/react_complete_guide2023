import classes from './Auth.module.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useRef } from 'react';
import { authActions } from '../store/auth-slice';

const Auth = () => {
	const dispatch = useDispatch();
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (emailRef.current!.value === '') {
			alert('please enter email');
			emailRef.current!.focus();
			return;
		}

		if (passwordRef.current!.value === '') {
			alert('please enter password ');
			passwordRef.current!.focus();
			return;
		}

		dispatch(authActions.login());
	};

	return (
		<main className={classes.auth}>
			<section>
				<form onSubmit={submitHandler}>
					<div className={classes.control}>
						<label htmlFor="email">Email</label>
						<input ref={emailRef} type="email" id="email" />
					</div>
					<div className={classes.control}>
						<label htmlFor="password">Password</label>
						<input ref={passwordRef} type="password" id="password" />
					</div>
					<button type="submit">Login</button>
				</form>
			</section>
		</main>
	);
};

export default Auth;
