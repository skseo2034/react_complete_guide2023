import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewPost from './components/NewPost';
import RootLayout from './routes/RootLayout';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ path: '/', element: <App /> },
			{
				path: '/create-post',
				element: (
					<NewPost
						onCancel={() => {
							// dummy
						}}
						onAddPost={() => {
							// dummy
						}}
					/>
				),
			},
		],
	},
]);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
		<App />
	</React.StrictMode>
);
