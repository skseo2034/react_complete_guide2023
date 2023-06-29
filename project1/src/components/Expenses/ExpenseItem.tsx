import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

const ExpenseItem = (props: { item: { id: string; title: string; amount: number; date: Date } }) => {
	const { id, title, amount, date } = props.item;

	const [itemTitle, setItemTitle] = useState(title);

	const clickHandler = () => {
		setItemTitle('titleUpdated!!!!');
	};

	return (
		<Card className="expense-item">
			<ExpenseDate date={date} />
			<div className="expense-item__description">
				<h2>{itemTitle}</h2>
				<div className="expense-item__price">${amount}</div>
			</div>
			<button onClick={clickHandler}>Change Title</button>
		</Card>
	);
};

export default ExpenseItem;
