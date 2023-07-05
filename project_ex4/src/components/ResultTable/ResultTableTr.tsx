import React, { FC } from 'react';
import { yearlyDataType } from '../../types/commonTypes';

interface Props {
	yearlyData: yearlyDataType;
}
const ResultTableTr: FC<Props> = ({ yearlyData }) => {
	const { year, yearlyInterest, yearlyContribution, savingsEndOfYear } = yearlyData;
	return (
		<tr>
			<td>{year}</td>
			<td>{savingsEndOfYear}</td>
			<td>{yearlyInterest}</td>
			<td>TOTAL INTEREST GAINED</td>
			<td>TOTAL INVESTED CAPITAL</td>
		</tr>
	);
};

export default ResultTableTr;
