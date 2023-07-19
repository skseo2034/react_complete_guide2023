import React, { useState } from 'react';

const useHttp = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	interface reqConType {
		url: string;
		method: string;
		headers: HeadersInit | undefined;
		body: object;
	}

	const sendRequest = async (requestConfig: reqConType) => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(requestConfig.url, {
				method: requestConfig.method,
				headers: requestConfig.headers,
				body: JSON.stringify(requestConfig.body),
			});

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
	};
};

export default useHttp;
