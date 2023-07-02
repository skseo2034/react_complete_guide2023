import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import React, { useEffect, useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

interface expenseItemType {
	id: string;
	title: string;
	amount: number;
	date: Date;
}
const Expenses = (props: { items: expenseItemType[] }) => {
	const [filteredYear, setFilteredYear] = useState('');
	// const [filteredExpenses, setFilteredExpenses] = useState<expenseItemType[]>(props.items);
	/*let filterInfoText = '2019, 2021 & 2022';
	if (filteredYear === '2019') {
		filterInfoText = '2020, 2021 & 2022';
	} else if (filteredYear === '2021') {
		filterInfoText = '2019, 2020 & 2022';
	} else if (filteredYear === '2022') {
		filterInfoText = '2019, 2020 & 2021';
	}*/
	const filterChangeHandler = (selectedYear: string) => {
		setFilteredYear(selectedYear);
	};

	let filteredExpenses = props.items;

	if (filteredYear) {
		filteredExpenses = props.items.filter(expense => {
			return expense.date.getFullYear().toString() === filteredYear;
		});
	}

	/*useEffect(() => {
		console.log('seo1111 >>>>>>>>>>>>> ', filteredYear);
		if (filteredYear) {
			const filteredExpenses = props.items.filter(expense => {
				return expense.date.getFullYear().toString() === filteredYear;
			});
			setFilteredExpenses(filteredExpenses);
		}
	}, [filteredYear]);*/

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
				{/*<p>Date for years {filterInfoText} is hidden.</p>*/}
				{/*{filteredExpenses.length === 0 && <p>No expenses found.</p>}
				{filteredExpenses.length > 0 &&
					filteredExpenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)}*/}
				{/*{filteredExpenses.length === 0 ? (
					<p>No expenses found.</p>
				) : (
					filteredExpenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)
				)}*/}
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList filteredExpenses={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
