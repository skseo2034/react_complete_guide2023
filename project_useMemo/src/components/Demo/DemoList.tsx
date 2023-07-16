import React, { useCallback, useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props: any) => {
	const sortedList = useMemo(() => {
		console.log('Items sorted');
		return props.items.sort((a: any, b: any) => a - b);
	}, [props.items]);

	console.log('DemoList RUNNING');

	return (
		<div className={classes.list}>
			<h2>{props.title}</h2>
			<ul>
				{sortedList.map((item: any) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default React.memo(DemoList);
