import React, { useEffect, useState } from 'react';
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';
import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';
import useHttp from './hooks/use-http';

function App() {
	/*return (
		<React.Fragment>
			<ForwardCounter />
			<BackwardCounter />
		</React.Fragment>
	);*/
	/*const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [tasks, setTasks] = useState<any[]>([]);

	const fetchTasks = async (taskText: any) => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch('https://react-http-93000-default-rtdb.firebaseio.com/tasks.json');

			if (!response.ok) {
				throw new Error('Request failed!');
			}

			const data = await response.json();

			const loadedTasks: any[] = [];

			for (const taskKey in data) {
				loadedTasks.push({ id: taskKey, text: data[taskKey].text });
			}

			setTasks(loadedTasks);
		} catch (err: any) {
			setError(err.message || 'Something went wrong!');
		}
		setIsLoading(false);
	};*/

	const fetchTasks = useHttp();
	useEffect(() => {
		/*fetchTasks('').then(r => {
			// dummy
		});*/
		fetchTasks();
	}, []);

	const taskAddHandler = (task: any) => {
		setTasks(prevTasks => prevTasks.concat(task));
	};

	return (
		<React.Fragment>
			<NewTask onAddTask={taskAddHandler} />
			<Tasks items={tasks} loading={isLoading} error={error} onFetch={fetchTasks} />
		</React.Fragment>
	);
}

export default App;
