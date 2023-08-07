import classes from './EventsList.module.css';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
	events: any[];
}

const EventsList: FC<Props> = ({ events }) => {
	console.log('seo444 >>>>>>>>>>>>>>>> ', events);
	return (
		<div className={classes.events}>
			<h1>All Events</h1>
			<ul className={classes.list}>
				{events.map((event: any) => (
					<li key={event.id} className={classes.item}>
						{/*Link to={`/events/${event.id}`}>*/}
						{/*이렇게 해도 된다. events 의 하위경로 이므로 상태경로를 지정해도 된다.*/}
						<Link to={`/events/${event.id}`}>
							<img src={event.image} alt={event.title} />
							<div className={classes.content}>
								<h2>{event.title}</h2>
								<time>{event.date}</time>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default EventsList;
