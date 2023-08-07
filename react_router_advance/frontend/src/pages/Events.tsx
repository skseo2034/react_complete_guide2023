import React, { useEffect, useState, Suspense } from 'react';
import { json, Link, useLoaderData, defer, Await } from 'react-router-dom';
import EventsList from '../components/EventsList';
import { useSelector } from 'react-redux';

interface seoType {
	events: any[];
	isError: boolean;
	message: string;
}

const EventsPage = () => {
	const { events } = useLoaderData() as ReturnType<any>; // { events: any[] | isError: string };

	return (
		<Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
			<Await resolve={events}>{loadedEvents => <EventsList events={loadedEvents} />}</Await>
		</Suspense>
	);

	// const data = useLoaderData() as seoType;
	/*if (data.isError) {
		return <p>{data.message}</p>;
	}*/

	// const events = data.events;
	/*const [isLoading, setIsLoading] = useState(false);
	const [fetchedEvents, setFetchedEvents] = useState<any[]>([]);
	const [error, setError] = useState<any>();*/
	/*const apiUrl = process.env.REACT_APP_API_URL;
	const apiPort = process.env.REACT_APP_PORT;*/
	// const apiUrl = useSelector((state: any) => state.env.apiUrl);
	// const apiPort = useSelector((state: any) => state.env.apiPort);
	//	console.log('seo >>>>>>>>>>>', process.env.REACT_APP_SEO);

	/*useEffect(() => {
		async function fetchEvents() {
			setIsLoading(true);
			/!*const response = await fetch(`${apiUrl}:${apiPort}/events`);

			if (!response.ok) {
				setError('Fetching events failed.');
			} else {
				const resData = await response.json();
				setFetchedEvents(resData.events);
			}*!/
			setIsLoading(false);
		}

		fetchEvents().then(r => {
			//dummy
		});
	}, []);*/
	// return (
	//	<>
	{
		/*<div style={{ textAlign: 'center' }}>
				{isLoading && <p>Loading...</p>}
				{error && <p>{error}</p>}
			</div>*/
	}
	{
		/*{!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}*/
	}
	//		<EventsList events={events} />
	//	</>
	//);
};

export default EventsPage;

const apiUrl = process.env.REACT_APP_API_URL;
const apiPort = process.env.REACT_APP_PORT;

const loadEvents = async () => {
	const response = await fetch(`${apiUrl}:${apiPort}/events`);

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

export const loader = () => {
	/*const response = await fetch(`${apiUrl}:${apiPort}/events`);

	if (!response.ok) {
		// return { isError: true, message: 'Could not fetch events.' };
		// throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), { status: 500 });
		throw json({ message: 'Could not fetch events.' }, { status: 500 });
	} else {
		// const data = await response.json();
		// return data.events;
		return response;
	}*/

	return defer({
		events: loadEvents(),
	});
};
