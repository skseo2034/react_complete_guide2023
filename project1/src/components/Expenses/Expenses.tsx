import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

interface expenseItemType {
	id: string;
	title: string;
	amount: number;
	date: Date;
}
const Expenses = (props: { items: expenseItemType[] }) => {
	return (
		<Card className="expenses">
			{props.items.map(item => (
				<ExpenseItem key={item.id} item={item} />
			))}
		</Card>
	);
};

export default Expenses;
