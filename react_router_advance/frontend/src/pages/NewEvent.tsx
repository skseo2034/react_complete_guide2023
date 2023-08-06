import React from 'react';
import EventForm from '../components/EventForm';
import { json, redirect } from 'react-router-dom';

const NewEventPage = () => {
	// 이렇게 할 수 있으나, 라우터에 더 좋은 접근법이 있다.
	// const submitHandler = (event: React.FormEvent) => {
	// 	event.preventDefault();
	// };

	return <EventForm event={undefined} />;
};

export default NewEventPage;

const apiUrl = process.env.REACT_APP_API_URL;
const apiPort = process.env.REACT_APP_PORT;
export const action = async ({ request, params }: { request: any; params: any }) => {
	const data = await request.formData();

	// const enteredTitle = data.get('title');
	const eventData = {
		title: data.get('title'),
		image: data.get('image'),
		date: data.get('date'),
		description: data.get('description'),
	};

	const response = await fetch(`${apiUrl}:${apiPort}/events`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(eventData),
	});

	if (!response.ok) {
		throw json({ message: 'Could not save event' }, { status: 500 });
	}

	return redirect('/events');
};
