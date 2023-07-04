import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = (props: any) => {
	return (
		<ul className="goal-list">
			{props.items.map((goal: any) => (
				<CourseGoalItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
					{goal.text}
				</CourseGoalItem>
			))}
		</ul>
	);
};

export default CourseGoalList;
