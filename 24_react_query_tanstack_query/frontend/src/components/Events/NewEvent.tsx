import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import Modal from '../UI/Modal';
import EventForm from './EventForm';
import { createNewEvent } from '../../util/http';
import ErrorBlock from '../UI/ErrorBlock';

export default function NewEvent() {
	const navigate = useNavigate();

	const { mutate, isPending, isError, error } = useMutation({
		mutationFn: createNewEvent,
	});

	function handleSubmit(formData: any) {
		console.log('formData', formData);
		mutate({ event: formData });
	}

	return (
		<Modal onClose={() => navigate('../')}>
			<EventForm onSubmit={handleSubmit}>
				{isPending && 'Submmtting...'}
				{!isPending && (
					<>
						<Link to="../" className="button-text">
							Cancel
						</Link>
						<button type="submit" className="button">
							Create
						</button>
					</>
				)}
			</EventForm>
			{isError && (
				<ErrorBlock
					title="Failed to create event"
					message={error.message || 'Please check your inputs and try again'}
				/>
			)}
		</Modal>
	);
}
