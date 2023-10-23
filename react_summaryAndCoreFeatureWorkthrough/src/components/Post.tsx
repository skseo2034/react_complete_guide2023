import classes from './Post.module.css';
import NewPost from '../routes/NewPost';
const Post = ({ author, body }: { author: string; body: string }) => {
	return (
		<li className={classes.post}>
			<p className={classes.author}>{author}</p>
			<p className={classes.text}>{body}</p>
		</li>
	);
};

export default Post;
