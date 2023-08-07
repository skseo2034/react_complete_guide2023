import { Form, json, redirect, useActionData, useNavigate, useNavigation } from 'react-router-dom';

import classes from './EventForm.module.css';

interface EventType {
	id: string;
	title: string;
	date: string;
	description: string;
	image: string;
}

const EventForm = (props: { method: any; event: EventType | undefined }) => {
	const data = useActionData() as any;
	const navigate = useNavigate();
	const navigation = useNavigation();

	// 이 값을 활용해서 사용자가 여러번 저장 버튼을 누르는 것을 방지 할 수 있다.
	const isSubmitting = navigation.state === 'submitting';

	const cancelHandler = () => {
		navigate('..');
	};
	const { event, method } = props;
	/*let event;
	if (props) {
		event = props.event;
		console.log('EditForm event', props.event);
	}*/

	return (
		// Form 을 사용하면 백엔드로 보니지 않고 추가한 action 으로 요청을 보내다.
		<Form method={method} className={classes.form}>
			{data && data.errors && (
				<ul>
					{Object.values(data.errors).map((err: any) => (
						<li key={err}>{err}</li>
					))}
				</ul>
			)}
			<p>
				<label htmlFor="title">Title</label>
				<input id="title" type="text" name="title" required defaultValue={event ? event.title : ''} />
			</p>
			<p>
				<label htmlFor="image">Image</label>
				<input id="image" type="url" name="image" required defaultValue={event ? event.image : ''} />
			</p>
			<p>
				<label htmlFor="date">Date</label>
				<input id="date" type="date" name="date" required defaultValue={event ? event.date : ''} />
			</p>
			<p>
				<label htmlFor="description">Description</label>
				<textarea
					id="description"
					name="description"
					rows={5}
					required
					defaultValue={event ? event.description : ''}
				/>
			</p>
			<div className={classes.actions}>
				<button type="button" onClick={cancelHandler} disabled={isSubmitting}>
					{isSubmitting ? 'Submitting...' : 'Cancel'}
				</button>
				<button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
			</div>
		</Form>
	);
};

export default EventForm;

const apiUrl = process.env.REACT_APP_API_URL;
const apiPort = process.env.REACT_APP_PORT;
export const action = async ({ request, params }: { request: any; params: any }) => {
	const method = request.method;
	const data = await request.formData();

	// const enteredTitle = data.get('title');
	const eventData = {
		title: data.get('title'),
		image: data.get('image'),
		date: data.get('date'),
		description: data.get('description'),
	};

	let url = `${apiUrl}:${apiPort}/events`;

	// 대문자 이어야 한다.
	if (method === 'PATCH') {
		const eventId = params.eventId;
		url = `${apiUrl}:${apiPort}/events/${eventId}`;
	}

	const response = await fetch(url, {
		method: method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(eventData),
	});

	// back-end 코드를 체크 하여 에러 처리를 한다.
	if (response.status === 422) {
		return response; // EventForm 에서 받아서 처리.
	}

	if (!response.ok) {
		throw json({ message: 'Could not save event' }, { status: 500 });
	}

	return redirect('/events');
};
