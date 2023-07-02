import React, { FC } from 'react';
import Cart from '../Chart/Cart';

interface Props {
	expenses: { id: string; title: string; amount: number; date: Date }[];
}

const ExpensesChart: FC<Props> = ({ expenses }) => {
	const chartDataPoints = [
		{ label: 'Jan', value: 0 },
		{ label: 'Feb', value: 0 },
		{ label: 'Mar', value: 0 },
		{ label: 'Apr', value: 0 },
		{ label: 'May', value: 0 },
		{ label: 'Jun', value: 0 },
		{ label: 'July', value: 0 },
		{ label: 'Aug', value: 0 },
		{ label: 'Sep', value: 0 },
		{ label: 'Oct', value: 0 },
		{ label: 'Nov', value: 0 },
		{ label: 'Dev', value: 0 },
	];

	for (const expense of expenses) {
		const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
		chartDataPoints[expenseMonth].value += expense.amount;
	}
	return <Cart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
