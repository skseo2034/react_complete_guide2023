import classes from './PageContent.module.css';

const PageContent = (props: { title: string; children: React.ReactNode }) => {
	const { title, children } = props;

	return (
		<div className={classes.content}>
			<h1>{title}</h1>
			{children}
		</div>
	);
};

export default PageContent;
