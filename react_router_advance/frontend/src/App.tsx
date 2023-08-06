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
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventDetailPage, { loader as eventDetailLoader, action as deleteEventAction } from './pages/EventDetail';
import NewEventPage, { action as newEventAction } from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';
import ErrorPage from './pages/Error';

const apiUrl = process.env.REACT_APP_API_URL;
const apiPort = process.env.REACT_APP_PORT;

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> }, // path:'' 과 동일
			{
				path: 'events',
				element: <EventsRootLayout />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						// 이렇게 해도 되나. 이것뿐아니라 다른것도 추가 하다 보면 파일 커진다.
						// 일반적은 패턴은 로더하는 파일에 추가하는 것이다.
						// 즉, EventsPage 에 추가하는 것이다.
						// 페이지를 불러오기 전(로딩되전)에 데이터를 loader 한다.
						loader: eventsLoader,
						/*async () => {
							const response = await fetch(`${apiUrl}:${apiPort}/events`);
							// const response = await fetch('/api/teachCostExpectedList'); proxy 사용할때 이렇게
							// const response = await fetch('http://local.xxxx.xxxx.com/api/xxxx');

							if (!response.ok) {
								// dummy ....
							} else {
								const resData = await response.json();
								return resData.events;
							}
						},*/
					},
					{
						path: ':eventId',
						id: 'event-detail',
						loader: eventDetailLoader,
						children: [
							{ index: true, element: <EventDetailPage />, action: deleteEventAction },
							{ path: 'edit', element: <EditEventPage />, action: newEventAction },
						],
					},
					{ path: 'new', element: <NewEventPage />, action: newEventAction },
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
