import React, { FC, useState } from 'react';
import Card from '../UI/Card';
import { UserInfoType } from '../../types/commonTypes';

import classes from './AddUser.module.css';

interface Props {
	onAadUserInfo: (userInfo: UserInfoType) => void;
}

const initialUserInpt: UserInfoType = {
	userName: '',
	age: '',
};

const AddUser: FC<Props> = ({ onAadUserInfo }) => {
	const [userInfo, setUserInfo] = useState(initialUserInpt);

	const inputChangeHandler = (input: string, value: string) => {
		setUserInfo(prevUserInfo => {
			return {
				...prevUserInfo,
				[input]: +value,
			};
		});
	};

	const addUserHandler = (event: React.FormEvent) => {
		event.preventDefault();
		onAadUserInfo(userInfo);
	};

	return (
		<div>
			<Card cssClass={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="userName">UserName</label>
					<input
						id="userName"
						type="text"
						required={true}
						onChange={event => inputChangeHandler('userName', event.target.value)}
					/>
					<label htmlFor="age">Age(Years)</label>
					<input
						id="age"
						type="number"
						required={true}
						onChange={event => inputChangeHandler('age', event.target.value)}
					/>
					<button type="submit">Add User</button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
