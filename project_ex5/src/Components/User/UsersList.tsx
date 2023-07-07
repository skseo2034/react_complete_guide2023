import React, { FC } from 'react';
import Card from '../UI/Card';
import { UserInfoType } from '../../types/commonTypes';
import classes from './UsersList.module.css';

interface Props {
	users: UserInfoType[];
}

const UsersList: FC<Props> = ({ users }) => {
	return (
		<Card cssClass={classes.users}>
			<ul>
				{users.map(user => (
					<li key={user.id}>
						{user.userName}({user.age} years old)
					</li>
				))}
			</ul>
		</Card>
	);
};

export default UsersList;
