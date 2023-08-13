import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';

import PostItem from '../components/PostItem';

function PostPage() {
	const post = useLoaderData() as any;

	return <PostItem post={post} />;
}

export default PostPage;

export function loader({ params }: { params: any }) {
	const postId = params.id;
	return fetch('https://jsonplaceholder.typicode.com/posts/' + postId);
}
