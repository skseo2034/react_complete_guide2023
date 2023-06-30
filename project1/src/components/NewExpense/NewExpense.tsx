import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props: {
	onAddExpense: (expense: { id: string; title: string; amount: number; date: Date }) => void;
}) => {
	const saveExpenseDataHandler = (enteredExpenseData: { title: string; amount: number; date: Date }) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};

		props.onAddExpense(expenseData);
	};
	return (
		<div className="new-expense">
			{/*<ExpenseForm addExpenseData={props.addExpenseData} />*/}
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
};

export default NewExpense;
