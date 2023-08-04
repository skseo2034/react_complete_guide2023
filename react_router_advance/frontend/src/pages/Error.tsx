import React from 'react';
import PageContent from './PageContent';
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

interface ErrotType {
	status: number;
	data: { message: string }; // string; //;
}

const ErrorPage = () => {
	const error = useRouteError() as ErrotType; // as any
	console.log('error', error);
	let title = 'An error occured!';
	let message = 'Something went wrong';

	if (error.status === 500) {
		message = error.data.message; // JSON.parse(error.data).message;
	}

	if (error.status === 404) {
		title = 'Not found!';
		message = 'Could not find resource or page.';
	}

	return (
		<>
			<MainNavigation />
			<PageContent title={title}>
				<p>{message}</p>
			</PageContent>
		</>
	);
};

export default ErrorPage;
