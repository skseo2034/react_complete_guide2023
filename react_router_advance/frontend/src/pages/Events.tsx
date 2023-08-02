import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';
import { useSelector } from 'react-redux';

const EventsPage = () => {
	const events = useLoaderData() as any[];
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
	return (
		<>
			{/*<div style={{ textAlign: 'center' }}>
				{isLoading && <p>Loading...</p>}
				{error && <p>{error}</p>}
			</div>*/}
			{/*{!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}*/}
			<EventsList events={events} />
		</>
	);
};

export default EventsPage;
