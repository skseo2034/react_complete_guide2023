import classes from './EventItem.module.css';
import { FC, useEffect } from 'react';
import { Link, useSubmit } from 'react-router-dom';

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
	const submit = useSubmit();

	const startDeleteHandler = () => {
		const proceed = window.confirm('Are you sure?');

		if (proceed) {
			// submit({}, {}); // 첫번째 인자 제출하고 싶은 데이터, 두번째 form 에 설정하는 데이터
			submit(null, { method: 'delete' });
		}
	};

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
