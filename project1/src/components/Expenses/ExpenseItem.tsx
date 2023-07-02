import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props: { expense: { id: string; title: string; amount: number; date: Date } }) => {
	const { id, title, amount, date } = props.expense;

	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={date} />
				<div className="expense-item__description">
					<h2>{title}</h2>
					<div className="expense-item__price">${amount}</div>
				</div>
			</Card>
		</li>
	);
};

export default ExpenseItem;
