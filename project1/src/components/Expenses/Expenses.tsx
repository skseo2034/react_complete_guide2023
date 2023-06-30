import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

interface expenseItemType {
	id: string;
	title: string;
	amount: number;
	date: Date;
}
const Expenses = (props: { items: expenseItemType[] }) => {
	const [filteredYear, setFilteredYear] = useState('2020');

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
	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
				{/*<p>Date for years {filterInfoText} is hidden.</p>*/}
				{props.items.map(item => (
					<ExpenseItem key={item.id} item={item} />
				))}
			</Card>
		</div>
	);
};

export default Expenses;
