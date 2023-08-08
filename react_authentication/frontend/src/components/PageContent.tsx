import classes from './PageContent.module.css';

function PageContent({ title, children }: { title: any; children: any }) {
	return (
		<div className={classes.content}>
			<h1>{title}</h1>
			{children}
		</div>
	);
}

export default PageContent;
