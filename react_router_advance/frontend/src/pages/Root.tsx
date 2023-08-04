import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const RootLayout = () => {
	// const events = useLoaderData();
	// console.log('events', events); // undefined 된다. 하위 레벨에서 로드된 데이터이기 때문에 상위에서는 얻을수 없다.

	// const navigation = useNavigation();

	return (
		<>
			<MainNavigation />
			<main>
				{/*{navigation.state === 'loading' && <p>Loading...</p>}*/}
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;
