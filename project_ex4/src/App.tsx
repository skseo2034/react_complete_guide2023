import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import ResultTable from './components/ResultTable/ResultTable';
import { UserInputType, yearlyDataType } from './types/commonTypes';
import { useState } from 'react';

function App() {
	const [userInput, setuserInput] = useState<UserInputType | null>(null);
	const calculateHandler = (userInput: UserInputType) => {
		setuserInput(userInput);
	};
	const yearlyData: yearlyDataType[] = []; // per-year results

	if (userInput) {
		let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
		const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
		const expectedReturn = +userInput['expected-return'] / 100;
		const duration = +userInput['duration'];

		// The below code calculates yearly results (total savings, interest etc)
		for (let i = 0; i < duration; i++) {
			const yearlyInterest = currentSavings * expectedReturn;
			currentSavings += yearlyInterest + yearlyContribution;
			yearlyData.push({
				// feel free to change the shape of the data pushed to the array!
				year: i + 1,
				yearlyInterest: yearlyInterest,
				savingsEndOfYear: currentSavings,
				yearlyContribution: yearlyContribution,
			});
		}
	}

	return (
		<div>
			<Header />

			<UserInput onAddYearInvestment={calculateHandler} />

			{!userInput && <p style={{ textAlign: 'center' }}>No investment calculated yet.</p>}
			{userInput && <ResultTable data={yearlyData} initialInvestment={userInput['current-savings']} />}
		</div>
	);
}

export default App;
