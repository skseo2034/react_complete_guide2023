import { Link, useNavigate } from 'react-router-dom';

import Modal from '../UI/Modal.js';
import EventForm from './EventForm.js';

export default function EditEvent() {
	const navigate = useNavigate();

	function handleSubmit(formData: any) {
		// dummy
	}

	function handleClose() {
		navigate('../');
	}

	return (
		<Modal onClose={handleClose}>
			<EventForm inputData={null} onSubmit={handleSubmit}>
				<Link to="../" className="button-text">
					Cancel
				</Link>
				<button type="submit" className="button">
					Update
				</button>
			</EventForm>
		</Modal>
	);
}
