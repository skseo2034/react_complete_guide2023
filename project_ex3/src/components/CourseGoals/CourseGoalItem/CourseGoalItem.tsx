import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = (props: any) => {
	const deleteHandler = () => {
		props.onDelete(props.id);
	};

	return (
		<li className="goal-item" onClick={deleteHandler}>
			{props.children}
		</li>
	);
};

export default CourseGoalItem;
