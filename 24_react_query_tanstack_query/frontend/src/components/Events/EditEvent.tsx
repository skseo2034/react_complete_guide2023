import { Link, useNavigate, useParams } from 'react-router-dom';

import Modal from '../UI/Modal';
import EventForm from './EventForm';
import { useQuery, useMutation } from '@tanstack/react-query';
import { fetchEvent, updateEvent } from '../../util/http';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';

export default function EditEvent() {
	const navigate = useNavigate();
	const params = useParams();

	const { data, isPending, isError, error } = useQuery({
		queryKey: ['evnetns', params.id],
		queryFn: () => fetchEvent({ id: params.id }),
	});

	const { mutate } = useMutation({
		mutationFn: updateEvent,
	});

	function handleSubmit(formData: any) {
		mutate({ id: params.id, event: formData });
		navigate('../');
	}

	function handleClose() {
		navigate('../');
	}

	let content;

	if (isPending) {
		content = (
			<div className="center">
				<LoadingIndicator />
			</div>
		);
	}

	if (isError) {
		content = (
			<>
				<ErrorBlock
					title="Failed to load event"
					message={error.message || 'Failed to load event. Please check your inputs and try again later.'}
				/>
				<div className="form-actions">
					<Link to="../" className="button">
						Okay
					</Link>
				</div>
			</>
		);
	}

	if (data) {
		content = (
			<EventForm inputData={data} onSubmit={handleSubmit}>
				<Link to="../" className="button-text">
					Cancel
				</Link>
				<button type="submit" className="button">
					Update
				</button>
			</EventForm>
		);
	}

	return <Modal onClose={handleClose}>{content}</Modal>;
}
