import React, { useEffect, useState } from 'react';
import { json, useParams } from 'react-router-dom';
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
	const params = useParams();
	const [event, setEvent] = useState<EventType | null>(null);

	/*const getEventDetail = async () => {
		const response = await fetch(`${apiUrl}:${apiPort}/events/${params.eventId}`);

		if (!response.ok) {
			throw new Error('error occured!');
		}

		const data = await response.json();

		setEvent(data.event);
	};*/

	useEffect(() => {
		console.log('getEventDetail useEffect running');
		/*getEventDetail().then(r => {
			// ... dummy
		});*/
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
	}, []);

	return (
		<>
			<h1>Event Detail Page </h1>
			{/*<p>event id : {params.eventId}</p>*/}
			{event && <EventItem event={event} />}
		</>
	);
};

export default EventDetailPage;
