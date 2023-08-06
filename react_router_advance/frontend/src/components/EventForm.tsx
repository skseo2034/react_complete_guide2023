import { Form, useNavigate, useNavigation } from 'react-router-dom';

import classes from './EventForm.module.css';

interface EventType {
	id: string;
	title: string;
	date: string;
	description: string;
	image: string;
}

const EventForm = (props: { event: EventType | undefined }) => {
	const navigate = useNavigate();
	const navigation = useNavigation();

	// 이 값을 활용해서 사용자가 여러번 저장 버튼을 누르는 것을 방지 할 수 있다.
	const isSubmitting = navigation.state === 'submitting';

	const cancelHandler = () => {
		navigate('..');
	};
	const { event } = props;
	/*let event;
	if (props) {
		event = props.event;
		console.log('EditForm event', props.event);
	}*/

	return (
		// Form 을 사용하면 백엔드로 보니지 않고 추가한 action 으로 요청을 보내다.
		<Form method="post" className={classes.form}>
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
