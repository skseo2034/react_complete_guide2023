import React, { useState } from 'react';
import AddUser from './Components/User/AddUser';
import UserInfoList from './Components/User/UserInfoList';
import { UserInfoType } from './types/commonTypes';

function App() {
	const [userList, setUserList] = useState<UserInfoType[]>([]);

	const addUserList = (userInfo: UserInfoType) => {
		setUserList(preUserList => {
			return [userInfo, ...preUserList];
		});
	};

	return (
		<div style={{ marginLeft: 100 }}>
			<AddUser onAadUserInfo={addUserList} />
			<UserInfoList userList={userList} />
		</div>
	);
}

export default App;
