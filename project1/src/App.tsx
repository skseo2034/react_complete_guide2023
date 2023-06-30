import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import SeoTest from './components/SeoTest';
import { useState } from 'react';

function App() {
	const expenses = [
		{
			id: 'e1',
			title: 'Toilet Paper',
			amount: 94.12,
			date: new Date(2020, 7, 14),
			//date: new Date('2020,07,14'),
		},
		{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
		{
			id: 'e3',
			title: 'Car Insurance',
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: 'e4',
			title: 'New Desk (Wooden)',
			amount: 450,
			date: new Date(2021, 5, 12),
		},
	];

	const [expenseDatas, setExpenseDatas] = useState(expenses);
	const addExpenseHandler = (expense: { id: string; title: string; amount: number; date: Date }) => {
		//setExpenseDatas(prevState => [...prevState, expenseData]);

		console.log('In App.tsx');
		console.log(expense);
	};
	return (
		<div>
			{/*<SeoTest />*/}
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenseDatas} />
		</div>
	);
}

export default App;
