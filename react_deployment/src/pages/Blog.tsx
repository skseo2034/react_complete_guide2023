import { useLoaderData } from 'react-router-dom';

import PostList from '../components/PostList';

function BlogPage() {
	const posts = useLoaderData() as any[];
	return <PostList posts={posts} />;
}

export default BlogPage;

const apiUrl = process.env.REACT_APP_API_URL;
const apiPort = process.env.REACT_APP_PORT;

export function loader() {
	console.log('seo >>>>>>>>>>>>', `${apiUrl}:${apiPort}`);
	return fetch('https://jsonplaceholder.typicode.com/posts');
}
