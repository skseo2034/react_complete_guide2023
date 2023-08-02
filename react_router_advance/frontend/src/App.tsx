// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import EventsPage from './pages/Events';
import EventDetailPage from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';

const apiUrl = process.env.REACT_APP_API_URL;
const apiPort = process.env.REACT_APP_PORT;

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> }, // path:'' 과 동일
			{
				path: 'events',
				element: <EventsRootLayout />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						loader: async () => {
							const response = await fetch(`${apiUrl}:${apiPort}/events`);
							// const response = await fetch('/api/teachCostExpectedList'); proxy 사용할때 이렇게
							// const response = await fetch('http://local.xxxx.xxxx.com/api/xxxx');
							console.log('seo 1111>>>>>>>>>>>>>>>> ', response);
							if (!response.ok) {
								// dummy ....
							} else {
								const resData = await response.json();
								console.log('seo >>>>>>>>>>>>>>>> ', response);
								return resData.events;
							}
						},
					},
					{ path: ':eventId', element: <EventDetailPage /> },
					{ path: 'new', element: <NewEventPage /> },
					{ path: ':eventId/edit', element: <EditEventPage /> },
				],
			}, // 상대경로 표시, '/events' 절대경로로 해도 된다.
		],
		/*children: [
			{ path: '/', element: <HomePage /> }, // path:'' 과 동일
			{
				path: '/events',
				element: <EventsRootLayout />,
				children: [
					{ path: '/events', element: <EventsPage /> },
					{ path: '/events/:eventId', element: <EventDetailPage /> },
					{ path: '/events/new', element: <NewEventPage /> },
					{ path: '/events/:eventId/edit', element: <EditEventPage /> },
				],
			}, // 상대경로 표시, '/events' 절대경로로 해도 된다.
		],*/
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
