import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

import Header from '../Header';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http';
import ErrorBlock from '../UI/ErrorBlock';

export default function EventDetails() {
	const params = useParams();
	//const queryClient = useQueryClient();
	const navigate = useNavigate();

	const { data, isPending, isError, error } = useQuery({
		queryKey: ['events', { id: params.id }],
		queryFn: () => fetchEvent({ id: params.id }),
	});

	const { mutate } = useMutation({
		//mutationFn: () => deleteEvent({ id: params.id }),
		mutationFn: deleteEvent,
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ['evnents'] });
			navigate(`/events`);
		},
	});

	function handleDelete() {
		mutate({ id: params.id });
	}

	let content;

	if (isPending) {
		content = (
			<div id="event-details-content" className="center">
				<p>Fetching event data...</p>
			</div>
		);
	}

	if (isError) {
		content = (
			<div id="event-details-content" className="center">
				<ErrorBlock
					title="Failed to load event"
					message={(error as any).info?.message || 'Failed to load event data, Please try again later.'}
				/>
			</div>
		);
	}

	if (data) {
		const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
			day: 'numeric',
			month: 'short',
			year: 'numeric',
		});
		content = (
			<>
				<header>
					<h1>{data.title}</h1>
					<nav>
						<button onClick={handleDelete}>Delete</button>
						<Link to="edit">Edit</Link>
					</nav>
				</header>
				<div id="event-details-content">
					<img src={`http://localhost:3000/${data.image}`} alt={data.title} />
					<div id="event-details-info">
						<div>
							<p id="event-details-location">{data.location}</p>
							<time dateTime={`Todo-DateT$Todo-Time`}>
								{formattedDate} @ {data.time}
							</time>
						</div>
						<p id="event-details-description">{data.description}</p>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<Outlet />
			<Header>
				<Link to="/events" className="nav-item">
					View all Events
				</Link>
			</Header>
			<article id="event-details">{content}</article>
		</>
	);
}
