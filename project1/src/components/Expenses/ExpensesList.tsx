import React, { FC } from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

interface expenseItemType {
	id: string;
	title: string;
	amount: number;
	date: Date;
}

interface Props {
	filteredExpenses: expenseItemType[];
}

// const ExpensesList = (props: { filteredExpenses: expenseItemType[] }) => {
// const ExpensesList: FC<Props> = ({ filteredExpenses }) => {
const ExpensesList: FC<Props> = ({ filteredExpenses: items }) => {
	if (items.length === 0) {
		return <h2 className="expenses-list__fallback">No expenses found.</h2>;
	}

	return (
		<ul className="expenses-list">
			{items.map(expense => (
				<ExpenseItem key={expense.id} expense={expense} />
			))}
		</ul>
	);
};

export default ExpensesList;
