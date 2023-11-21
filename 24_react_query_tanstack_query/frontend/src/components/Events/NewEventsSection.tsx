import { useEffect, useState } from 'react';

import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import EventItem from './EventItem';
import { useQuery } from '@tanstack/react-query';
import { fetchEvents } from '../../util/http';

export default function NewEventsSection() {
	const { data, isPending, isError, isLoading, error } = useQuery({
		queryKey: ['events', { max: 3 }],
		// queryFn: () => fetchEvents({ max: 3 }),
		queryFn: ({ queryKey }) => fetchEvents({ ...(queryKey as any)[1] }),
	});

	let content;

	if (isPending) {
		content = <LoadingIndicator />;
	}

	if (isError) {
		content = (
			<ErrorBlock title="An error occurred" message={(error as any).info?.message || 'Failed to fetch events'} />
		);
	}

	if (data) {
		content = (
			<ul className="events-list">
				{data.map((event: any) => (
					<li key={event.id}>
						<EventItem event={event} />
					</li>
				))}
			</ul>
		);
	}

	return (
		<section className="content-section" id="new-events-section">
			<header>
				<h2>Recently added events</h2>
			</header>
			{content}
		</section>
	);
}
