import AuthForm from '../components/AuthForm';
import { json, redirect } from 'react-router-dom';

function AuthenticationPage() {
	return <AuthForm />;
}

export default AuthenticationPage;

const apiUrl = process.env.REACT_APP_API_URL;
const apiPort = process.env.REACT_APP_PORT;

export const action = async ({ request }: { request: any }) => {
	const searchParams = new URL(request.url).searchParams;
	const mode = searchParams.get('mode') || 'login';

	if (mode !== 'login' && mode !== 'signup') {
		throw json({ message: 'Unsupportd mode.' }, { status: 422 });
	}

	const data = await request.formData();

	const authData = {
		email: data.get('email'),
		password: data.get('password'),
	};

	const response = await fetch(`${apiUrl}:${apiPort}/${mode}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(authData),
	});
	console.log('Authentication action response', response);
	if (response.status === 422 || response.status === 401) {
		return response;
	}

	if (!response.ok) {
		throw json({ message: 'Could not authenticate user.' }, { status: 500 });
	}

	// soon: manage that token
	return redirect('/');
};
