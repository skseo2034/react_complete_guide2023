import React, { FC, useState } from 'react';
import { UserInputType } from '../../types/commonTypes';
import classes from './UserInput.module.css';

interface Props {
	onAddYearInvestment: (userInput: UserInputType) => void;
}

const initialUserInpt = {
	currentSavings: 10000,
	yearlyContribution: 1200,
	expectedReturn: 7,
	duration: 10,
};

const UserInput: FC<Props> = ({ onAddYearInvestment }) => {
	/*const [currentSavings, setCurrentSavings] = useState('');
	const [yearlyContribution, setYearlyContribution] = useState('');
	const [expectedReturn, setExpectedReturn] = useState('');
	const [duration, setDuration] = useState('');
*/
	const [userInput, setUserInput] = useState(initialUserInpt);

	/*const savingsChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentSavings(event.target.value);
	};

	const yearlyContributionChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setYearlyContribution(event.target.value);
	};

	const expectedReturnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setExpectedReturn(event.target.value);
	};

	const durationChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDuration(event.target.value);
	};*/

	const inputChangeHandler = (input: string, value: string) => {
		setUserInput(prevInput => {
			return {
				...prevInput,
				[input]: +value,
			};
		});
	};

	const resetHandler = () => {
		/*setCurrentSavings('');
		setYearlyContribution('');
		setExpectedReturn('');
		setDuration('');*/
		setUserInput(initialUserInpt);
	};

	const onSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const enteredUserInput = {
			/*	'current-savings': currentSavings,
			'yearly-contribution': yearlyContribution,
			'expected-return': expectedReturn,
			duration: duration,*/
			'current-savings': userInput.currentSavings,
			'yearly-contribution': userInput.yearlyContribution,
			'expected-return': userInput.expectedReturn,
			duration: userInput.duration,
		};

		onAddYearInvestment(enteredUserInput);

		resetHandler();
	};

	return (
		<form className={classes.form} onSubmit={onSubmitHandler}>
			<div className={classes['input-group']}>
				<p>
					<label htmlFor="current-savings">Current Savings ($)</label>
					<input
						type="number"
						id="current-savings"
						value={userInput.currentSavings}
						onChange={event => inputChangeHandler('currentSavings', event.target.value)}
					/>
				</p>
				<p>
					<label htmlFor="yearly-contribution">Yearly Savings ($)</label>
					<input
						type="number"
						id="yearly-contribution"
						value={userInput.yearlyContribution}
						onChange={event => inputChangeHandler('yearlyContribution', event.target.value)}
					/>
				</p>
			</div>
			<div className={classes['input-group']}>
				<p>
					<label htmlFor="expected-return">Expected Interest (%, per year)</label>
					<input
						type="number"
						id="expected-return"
						value={userInput.expectedReturn}
						onChange={event => inputChangeHandler('expectedReturn', event.target.value)}
					/>
				</p>
				<p>
					<label htmlFor="duration">Investment Duration (years)</label>
					<input
						type="number"
						id="duration"
						value={userInput.duration}
						onChange={event => inputChangeHandler('duration', event.target.value)}
					/>
				</p>
			</div>
			<p className={classes.actions}>
				<button type="reset" className={classes.buttonAlt} onClick={resetHandler}>
					Reset
				</button>
				<button type="submit" className={classes.button}>
					Calculate
				</button>
			</p>
		</form>
	);
};

export default UserInput;
