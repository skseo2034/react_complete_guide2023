import React from 'react';
import EventForm from '../components/EventForm';

const NewEventPage = () => {
	// 이렇게 할 수 있으나, 라우터에 더 좋은 접근법이 있다.
	// const submitHandler = (event: React.FormEvent) => {
	// 	event.preventDefault();
	// };

	return <EventForm event={undefined} method="post" />;
};

export default NewEventPage;
