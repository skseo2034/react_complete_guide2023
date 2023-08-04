import React from 'react';
import EventForm from '../components/EventForm';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';

const EditEventPage = () => {
	const data = useRouteLoaderData('event-detail') as any;
	console.log('EditEventPage data', data.event);
	return <EventForm event={data.event} />;
};

export default EditEventPage;
