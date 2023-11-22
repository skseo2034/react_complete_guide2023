import { Link, redirect, useNavigate, useParams, useSubmit, useNavigation } from 'react-router-dom';

import Modal from '../UI/Modal';
import EventForm from './EventForm';
import { useQuery, useMutation } from '@tanstack/react-query';
import { fetchEvent, queryClient, updateEvent } from '../../util/http';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';

export default function EditEvent() {
	const navigate = useNavigate();
	const { state } = useNavigation();
	const submit = useSubmit();
	const params = useParams();

	const { data, /*isPending,*/ isError, error } = useQuery({
		queryKey: ['evnetns', params.id],
		queryFn: () => fetchEvent({ id: params.id }),
		staleTime: 10000,
	});

	// const { mutate } = useMutation({
	// 	mutationFn: updateEvent,
	// 	onMutate: async data => {
	// 		// 낙관적인 업데이트
	// 		const newEvent = data.event;
	// 		await queryClient.cancelQueries({ queryKey: ['events', params.id] }); // 낙관적인 업데이트를 함으로 패치하지 않도록 한다.
	// 		const previousEvent = queryClient.getQueryData(['events', params.id]);
	//
	// 		queryClient.setQueryData(['events', params.id], newEvent);
	//
	// 		return { previousEvent };
	// 	},
	// 	onError: (error, data, context) => {
	// 		queryClient.setQueryData(['events', params.id], context?.previousEvent);
	// 	},
	// 	onSettled: async () => {
	// 		// 성공하던 실패 하던 무조건 호출 된다.
	// 		await queryClient.invalidateQueries({ queryKey: ['events', params.id] });
	// 	},
	// });

	function handleSubmit(formData: any) {
		// mutate({ id: params.id, event: formData });
		// navigate('../');
		submit(formData, { method: 'PUT' });
	}

	function handleClose() {
		navigate('../');
	}

	let content;

	// if (isPending) {
	// 	content = (
	// 		<div className="center">
	// 			<LoadingIndicator />
	// 		</div>
	// 	);
	// }

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
				{state === 'submitting' ? (
					<p>Sending data...</p>
				) : (
					<>
						<Link to="../" className="button-text">
							Cancel
						</Link>
						<button type="submit" className="button">
							Update
						</button>
					</>
				)}
			</EventForm>
		);
	}

	return <Modal onClose={handleClose}>{content}</Modal>;
}

export async function loader({ params }: { params: any }) {
	return await queryClient.fetchQuery({
		queryKey: ['evnetns', params.id],
		queryFn: () => fetchEvent({ id: params.id }),
	});
}

export async function action({ request, params }: { request: any; params: any }) {
	const formData = await request.formData();
	const updatedEventData = Object.fromEntries(formData);
	await updateEvent({ id: params.id, event: updatedEventData });
	await queryClient.invalidateQueries({ queryKey: ['events'] });

	return redirect('../');
}
