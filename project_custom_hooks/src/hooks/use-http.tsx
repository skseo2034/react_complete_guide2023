import React, { useCallback, useState } from 'react';

interface reqConType {
	url: string;
	method?: string;
	headers?: HeadersInit | undefined;
	body?: object;
}
const useHttp = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const sendRequest = useCallback(async (requestConfig: reqConType, applyData: (data: any) => void) => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(requestConfig.url, {
				method: requestConfig.method ? requestConfig.method : 'GET',
				headers: requestConfig.headers ? requestConfig.headers : {},
				body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
			});

			if (!response.ok) {
				throw new Error('Request failed!');
			}

			const data = await response.json();

			applyData(data);
		} catch (err: any) {
			setError(err.message || 'Something went wrong!');
		}
		setIsLoading(false);
	}, []);

	return {
		/*isLoading: isLoading,
		error: error,
		sendRequest: sendRequest,*/
		isLoading,
		error,
		sendRequest,
	};
};

export default useHttp;
