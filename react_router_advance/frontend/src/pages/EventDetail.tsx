import React, { useEffect, useState, Suspense } from 'react';
import { Await, defer, json, redirect, useLoaderData, useParams, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

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

	// const data = useRouteLoaderData('event-detail') as any;
	const { event, events } = useRouteLoaderData('event-detail') as any;
	/*return <>{event && <EventItem event={event} />}</>;*/
	return (
		<>
			<Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
				<Await resolve={event}>{loadEvent => <EventItem event={loadEvent} />}</Await>
				<Await resolve={events}>{loadEvents => <EventsList events={loadEvents} />}</Await>
				{/*<EventItem event={data.event} />;*/}
			</Suspense>
		</>
	);
};

export default EventDetailPage;

const loadEvent = async (eventId: string) => {
	const response = await fetch(`${apiUrl}:${apiPort}/events/${eventId}`);

	if (!response.ok) {
		throw json({ message: 'Could not fetch details for selected event.' }, { status: 500 });
	} else {
		const data = await response.json();
		return data.event;
	}
};

const loadEvents = async () => {
	const response = await fetch(`${apiUrl}:${apiPort}/events`);
	console.log('seo222 >>>>>>>>>>>>> ', response);
	if (!response.ok) {
		// return { isError: true, message: 'Could not fetch events.' };
		// throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), { status: 500 });
		throw json({ message: 'Could not fetch events.' }, { status: 500 });
	} else {
		const data = await response.json();

		return data.events;
		// return response;
	}
};

export const loader = async ({ request, params }: { request: any; params: any }) => {
	const eventId = params.eventId;
	console.log('seo333 >>>>>>>>>>>>> ', eventId);

	return defer({
		event: await loadEvent(eventId), // await 를 추가 함으로써 아래 events list 가 나오기 까지 기다린다.
		events: loadEvents(),
	});
	// const response = await fetch(`${apiUrl}:${apiPort}/events/${eventId}`);
	//
	// if (!response.ok) {
	// 	throw json({ message: 'Could not fetch details for selected event.' }, { status: 500 });
	// } else {
	// 	return response;
	// }
};

export const action = async ({ request, params }: { request: any; params: any }) => {
	const eventId = params.eventId;
	const response = await fetch(`${apiUrl}:${apiPort}/events/${eventId}`, {
		method: request.method, // 'DELETE',
	});

	if (!response.ok) {
		throw json({ message: 'Could not delete event' }, { status: 500 });
	}

	return redirect('/events');
};
