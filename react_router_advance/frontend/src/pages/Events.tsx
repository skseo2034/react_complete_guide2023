import React from 'react';
import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
	{ id: 'e1', title: 'Some event' },
	{ id: 'e2', title: 'Another event' },
];

const EventsPage = () => {
	return (
		<>
			<h1>Events Page</h1>
			<ul>
				{DUMMY_EVENTS.map(event => (
					<li key={event.id}>
						{/*<Link to={`/evnets/${event.id}`}>{event.title}</Link>*/}
						<Link to={event.id}>{event.title}</Link> {/* 현재 활성화된 경로 다음에 붙는다.*/}
					</li>
				))}
			</ul>
		</>
	);
};

export default EventsPage;
