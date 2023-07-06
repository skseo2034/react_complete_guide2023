import React, { FC } from 'react';
import { yearlyDataType } from '../../types/commonTypes';

interface Props {
	yearlyData: yearlyDataType;
	initialInvestment: number;
}

const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
});

const ResultTableTr: FC<Props> = ({ yearlyData, initialInvestment }) => {
	const { year, yearlyInterest, yearlyContribution, savingsEndOfYear } = yearlyData;
	return (
		<tr>
			<td>{year}</td>
			<td>{formatter.format(savingsEndOfYear)}</td>
			<td>{formatter.format(yearlyInterest)}</td>
			<td>{formatter.format(savingsEndOfYear - initialInvestment - yearlyContribution * year)}</td>
			<td>{formatter.format(initialInvestment + yearlyContribution * year)}</td>
		</tr>
	);
};

export default ResultTableTr;
