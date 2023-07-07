import React, { FC, useRef, useState } from 'react';
import Card from '../UI/Card';
import { UserInfoType } from '../../types/commonTypes';

import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

interface Props {
	onAddUserInfo: (userInfo: UserInfoType) => void;
}

interface ErrorType {
	title: string;
	message: string;
}

const initialUserInpt: UserInfoType = {
	id: '',
	userName: '',
	age: '',
};

const AddUser: FC<Props> = ({ onAddUserInfo }) => {
	const nameInputRef = useRef<HTMLInputElement>(null);
	const ageInputRef = useRef<HTMLInputElement>(null);

	// const [userInfo, setUserInfo] = useState(initialUserInpt);
	// const [isError, setIsError] = useState(false);
	const [error, setError] = useState<ErrorType | null>(null);

	/*const inputChangeHandler = (input: string, value: string) => {
		setUserInfo(prevUserInfo => {
			return {
				...prevUserInfo,
				[input]: +value,
				id: Math.random().toString(),
			};
		});
	};*/

	const addUserHandler = (event: React.FormEvent) => {
		event.preventDefault();

		let enteredName = '';
		if (nameInputRef.current) {
			enteredName = nameInputRef.current.value;
		}

		let enteredAge = '';
		if (ageInputRef.current) {
			enteredAge = ageInputRef.current.value;
		}

		// console.log('seo111 >>>>>>>>>>>', enteredName, );
		// 개별 변수로 받아서  상태 관리하면 trim 바로 사용해도 되나, 객체로 사용할 경우 toString() 해 줘야 함.
		// if (userInfo.userName.toString().trim().length === 0 || userInfo.age.toString().trim().length === 0) {
		if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
			// setIsError(true);
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values)',
			});
			return;
		}

		//if (+userInfo.age < 1) {
		if (+enteredAge < 1) {
			// setIsError(true);
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age (> 0)',
			});
			return;
		}

		const enteredUserInfo = {
			id: Math.random().toString(),
			userName: enteredName,
			age: enteredAge,
		};

		onAddUserInfo(enteredUserInfo);

		// setUserInfo(initialUserInpt);

		// 일반적으로 사용하지 않는다. 값을 초기화 하기 위해서는 상태를 이용해라.
		if (nameInputRef.current) {
			nameInputRef.current.value = '';
		}

		if (ageInputRef.current) {
			ageInputRef.current.value = '';
		}
	};

	const errorHandler = () => {
		// setIsError(false);
		setError(null);
	};
	return (
		<>
			{error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
			<Card cssClass={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="userName">UserName</label>
					<input
						id="userName"
						type="text"
						/*onChange={event => inputChangeHandler('userName', event.target.value)}
						value={userInfo.userName}*/
						ref={nameInputRef}
					/>
					<label htmlFor="age">Age(Years)</label>
					<input
						id="age"
						type="number"
						/*onChange={event => inputChangeHandler('age', event.target.value)}
						value={userInfo.age}*/
						ref={ageInputRef}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</>
	);
};

export default AddUser;
