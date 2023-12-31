import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';



const NewTask = (props: any) => {
	const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

	const createTask = (taskData: any, taskText: any) => {
		const generatedId = taskData.name; // firebase-specific => "name" contains generated id
		const createdTask = { id: generatedId, text: taskText };

		props.onAddTask(createdTask);
	};

	const enterTaskHandler = async (taskText: any) => {
		await sendTaskRequest(
			{
				url: 'https://react-http-93000-default-rtdb.firebaseio.com/tasks.json',
				method: 'POST',
				body: { text: taskText },
				headers: {
					'Content-Type': 'application/json',
				},
			},
			createTask.bind(null, taskText)
		);

	return (
		<Section>
			<TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
			{error && <p>{error}</p>}
		</Section>
	);
};

export default NewTask;
