import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { FC, useState } from 'react';

interface Props {
	onAddExpense: (expense: { id: string; title: string; amount: number; date: Date }) => void;
}
const NewExpense: FC<Props> = ({ onAddExpense }) => {
	const [isEditing, setIsEditing] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData: { title: string; amount: number; date: Date }) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};

		onAddExpense(expenseData);
		setIsEditing(false);
	};

	const startEditingHandler = () => {
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};

	return (
		<div className="new-expense">
			{/*<ExpenseForm addExpenseData={props.addExpenseData} />*/}
			{!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
			{isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
		</div>
	);
};

export default NewExpense;
