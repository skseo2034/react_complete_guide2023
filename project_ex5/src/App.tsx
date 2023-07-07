import React, { useState } from 'react';
import AddUser from './Components/User/AddUser';
import UsersList from './Components/User/UsersList';
import { UserInfoType } from './types/commonTypes';

function App() {
	const [userList, setUserList] = useState<UserInfoType[]>([]);

	const addUserList = (userInfo: UserInfoType) => {
		setUserList(preUserList => {
			return [userInfo, ...preUserList];
		});
	};

	return (
		<>
			<AddUser onAddUserInfo={addUserList} />
			<UsersList users={userList} />
		</>
	);
}

export default App;
