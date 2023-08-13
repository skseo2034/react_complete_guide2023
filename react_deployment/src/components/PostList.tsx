import { Link } from 'react-router-dom';

import classes from './PostList.module.css';

function PostList({ posts }: { posts: any }) {
	console.log('PostList111', posts);
	return (
		<ul className={classes.list}>
			{posts.map((post: any) => (
				<li key={post.id}>
					<Link to={post.id.toString()}>{post.title}</Link>
				</li>
			))}
		</ul>
	);
}

export default PostList;
