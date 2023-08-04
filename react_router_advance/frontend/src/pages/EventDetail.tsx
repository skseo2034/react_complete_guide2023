import React, { useEffect, useState } from 'react';
import { json, useLoaderData, useParams, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

const apiUrl = process.env.REACT_APP_API_URL;
const apiPort = process.env.REACT_APP_PORT;

interface EventType {
	id: string;
	title: string;
	date: string;
	description: string;
	image: string;
}

const EventDetailPage = () => {
	// const params = useParams();
	// const [event, setEvent] = useState<EventType | null>(null);

	/*const getEventDetail = async () => {
		const response = await fetch(`${apiUrl}:${apiPort}/events/${params.eventId}`);

		if (!response.ok) {
			throw new Error('error occured!');
		}

		const data = await response.json();

		setEvent(data.event);
	};*/

	/*useEffect(() => {
		console.log('getEventDetail useEffect running');
		/!*getEventDetail().then(r => {
			// ... dummy
		});*!/
		const getEventDetail = async () => {
			const response = await fetch(`${apiUrl}:${apiPort}/events/${params.eventId}`);
			console.log('response', response);
			if (!response.ok) {
				throw new Error('error occured!');
			}

			const data = await response.json();

			console.log('data111', data.event);

			setEvent(data.event);
		};

		getEventDetail().then(r => {
			console.log('seo222 >>>>>>>>>>>> ', event);
		});
	}, []);*/

	const data = useRouteLoaderData('event-detail') as any;
	/*return <>{event && <EventItem event={event} />}</>;*/
	return <EventItem event={data.event} />;
};

export default EventDetailPage;

export const loader = async ({ request, params }: { request: any; params: any }) => {
	const eventId = params.eventId;
	const response = await fetch(`${apiUrl}:${apiPort}/events/${eventId}`);

	if (!response.ok) {
		throw json({ message: 'Could not fetch details for selected event.' }, { status: 500 });
	} else {
		return response;
	}
};
