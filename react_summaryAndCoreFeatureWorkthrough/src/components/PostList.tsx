import Post from './Post';

import classes from './PostList.module.css';
import NewPost from '../routes/NewPost';
import Modal from './Modal';
import { useEffect, useState } from 'react';
const PostList = () => {
	const [posts, setPosts] = useState<any[]>([]);
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		async function getPosts() {
			setIsFetching(true);
			const response = await fetch('http://localhost:8080/posts');
			const resData = await response.json();
			setPosts(resData);
			setIsFetching(false);
		}

		getPosts().then(res => {
			// dummy
		});
	}, []);

	const addPostHandler = async (postData: any) => {
		await fetch('http://localhost:8080/post', {
			method: 'POST',
			body: JSON.stringify(postData),
			headers: {
				'Content-type': 'applicaton/json',
			},
		});
		setPosts(existingPosts => [postData, ...existingPosts]);
	};
	// let modalContent;

	// if (isPosting) {
	// 	modalContent = (
	// 		<Modal onClose={hideModalHandler}>
	// 			<NewPost />
	// 		</Modal>
	// 	);
	// }

	return (
		<>
			{/*{isPosting ? (
				<Modal onClose={onStopPosting}>
					<NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
				</Modal>
			) : null}*/}

			{/*{modalContent}*/}
			{!isFetching && posts.length > 0 && (
				<ul className={classes.posts}>
					{posts.map(post => (
						<Post key={post.body} author={post.author} body={post.body} />
					))}
				</ul>
			)}
			{!isFetching && posts.length === 0 && (
				<div style={{ textAlign: 'center', color: 'white' }}>
					<h2>There are no posts yet.</h2>
					<p>Start adding some!</p>
				</div>
			)}
			{isFetching && <p style={{ textAlign: 'center', color: 'white' }}>Loading posts....</p>}
		</>
	);
};

export default PostList;
