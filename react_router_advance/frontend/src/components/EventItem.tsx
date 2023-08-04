import classes from './EventItem.module.css';
import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface EventType {
	id: string;
	title: string;
	date: string;
	description: string;
	image: string;
}

interface PropsType {
	event: EventType;
}

const EventItem: FC<PropsType> = ({ event }) => {
	console.log('event1111', event.id);
	function startDeleteHandler() {
		// ...
	}

	return (
		<article className={classes.event}>
			<h1>{event.title}</h1>
			<img src={event.image} alt={event.title} />
			<h1>{event.title}</h1>
			<time>{event.date}</time>
			<p>{event.description}</p>
			<menu className={classes.actions}>
				{/*<Link to={`/events/${event.id}/edit`}>Edit1</Link>*/}
				<Link to="edit">Edit</Link>
				<button onClick={startDeleteHandler}>Delete</button>
			</menu>
		</article>
	);
};

export default EventItem;
