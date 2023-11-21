import { QueryClient } from '@tanstack/react-query';

//export async function fetchEvents({ signal, searchTerm }: { signal?: any; searchTerm?: string }) {
import axios from 'axios';

export const queryClient = new QueryClient();

export async function fetchEvents({ searchTerm, max }: { searchTerm?: string; max?: number }) {
	console.log(searchTerm);
	let url = 'http://localhost:3000/events';

	if (searchTerm && max) {
		url += '?search=' + searchTerm + '&max=' + max;
	} else if (searchTerm) {
		url += '?search=' + searchTerm;
	} else if (max) {
		url += '?max=' + max;
	}
	// const response = await fetch(url, signal);
	const response = await fetch(url);

	if (!response.ok) {
		const error = new Error('An error occurred while fetching the events') as any;
		error.code = response.status;
		error.info = await response.json();
		throw error;
	}

	const { events } = await response.json();

	return events;
}

export async function createNewEvent(eventData: any) {
	console.log('eventData', eventData);
	const response = await fetch('http://localhost:3000/events', {
		method: 'POST',
		body: JSON.stringify(eventData),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		const error = new Error('An error occured while creating the event');
		//error.code = response.status;
		error.message = await response.json();
		throw error;
	}

	const { event } = await response.json();

	return event;
}

export async function fetchSelectbaleImages() {
	const response = await fetch('http://localhost:3000/events/images');

	console.log('seo >>>>>>>>>>>>>>>>>', response);

	if (!response.ok) {
		const error = new Error('An error occured while fetching the images');
		//error.code = response.status;
		error.message = await response.json();
		throw error;
	}

	const { images } = await response.json();

	return images;
	/*const response = await axios({
		url: 'http://localhost:3000/events/images',
		method: 'get',
	});
	console.log('seo >>>>>>>>>>>>>>>>>', response);
	return response.data.images;*/
}

export async function fetchEvent({ id }: { id: any }) {
	const response = await fetch(`http://localhost:3000/events/${id}`);

	if (!response.ok) {
		const error = new Error('An error occurred while fetching the event') as any;
		error.code = response.status;
		error.info = await response.json();
		throw error;
	}

	const { event } = await response.json();

	return event;
}

export async function deleteEvent({ id }: { id: any }) {
	const response = await fetch(`http://localhost:3000/events/${id}`, {
		method: 'DELETE',
	});

	if (!response.ok) {
		const error = new Error('An error occurred while deleting the event') as any;
		error.code = response.status;
		error.info = await response.json();
		throw error;
	}

	return await response.json();
}

export async function updateEvent({ id, event }: { id: any; event: any }) {
	const response = await fetch(`http://localhost:3000/events/${id}`, {
		method: 'PUT',
		body: JSON.stringify({ event }),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		const error = new Error('An error occurred while updating the event') as any;
		error.code = response.status;
		error.info = await response.json();
		throw error;
	}

	return await response.json();
}
