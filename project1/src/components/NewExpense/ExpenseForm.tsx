import './ExpenseForm.css';
import React, { FC, useState } from 'react';

/*const ExpenseForm = (props: {
	addExpenseData: (expenseData: { id: string; title: string; amount: number; date: Date }) => void;
})*/

interface Props {
	onSaveExpenseData: (enteredExpenseData: { title: string; amount: number; date: Date }) => void;
	onCancel: () => void;
}
const ExpenseForm: FC<Props> = ({ onSaveExpenseData, onCancel }) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	/*const [userInput, setUserInput] = useState({
		setEnteredTitle: '',
		setEnteredAmount: '',
		setEnteredDate: '',
	});*/

	/*const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredTitle(event.target.value);
		/!*setUserInput({
			...userInput,
			setEnteredTitle: event.target.value,
		});*!/ // 이렇게 하면 안된다 최신 상태가 아닐수 있다. 아래 처럼 prevState 를 이용행 한다.
		/!*setUserInput(prevState => {
			return { ...prevState, setEnteredTitle: event.target.value };
		});*!/
	};*/

	/*const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredAmount(event.target.value);
		// setUserInput({
		//	 ...userInput,
		//	 setEnteredAmount: event.target.value,
		// });
		/!*setUserInput(prevState => {
			return { ...prevState, setEnteredAmount: event.target.value };
		});*!/
	};*/

	/*const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredDate(event.target.value);
		/!*setUserInput({
			...userInput,
			setEnteredDate: event.target.value,
		});*!/
		/!*setUserInput(prevState => {
			return { ...prevState, setEnteredDate: event.target.value };
		});*!/
	};*/

	const inputChangeHandler = (identifier: string, value: string) => {
		if (identifier === 'title') {
			setEnteredTitle(value);
		} else if (identifier === 'date') {
			setEnteredDate(value);
		} else if (identifier === 'amount') {
			setEnteredAmount(value);
		}
	};

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: Number(enteredAmount),
			date: new Date(enteredDate),
		};

		//props.addExpenseData(expenseData);
		onSaveExpenseData(expenseData);

		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={event => inputChangeHandler('title', event.target.value)}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						value={enteredAmount}
						min="0,01"
						step="0.01"
						onChange={event => inputChangeHandler('amount', event.target.value)}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						value={enteredDate}
						min="2019-01-01"
						step="2022-12-31"
						onChange={event => inputChangeHandler('date', event.target.value)}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={onCancel}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
