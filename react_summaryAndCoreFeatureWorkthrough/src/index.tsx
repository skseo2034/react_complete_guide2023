import React from 'react';
import ReactDOM from 'react-dom/client';
import Posts from './routes/Posts';
import './index.css';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewPost from './routes/NewPost';
import RootLayout from './routes/RootLayout';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ path: '/', element: <Posts /> },
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
		<Posts />
	</React.StrictMode>
);
