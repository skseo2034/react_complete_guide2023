import React, { FC } from 'react';
import Card from '../UI/Card';
import { UserInfoType } from '../../types/commonTypes';

interface Props {
	userList: UserInfoType[];
}

const UserInfoList: FC<Props> = ({ userList }) => {
	return (
		<Card cssClass="">
			<ul>
				{userList.map(userInfo => (
					<li>
						{userInfo.userName}({userInfo.age} years old)
					</li>
				))}
			</ul>
		</Card>
	);
};

export default UserInfoList;
