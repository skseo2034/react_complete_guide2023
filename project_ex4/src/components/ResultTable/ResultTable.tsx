import React, { FC } from 'react';
import ResultTableTr from './ResultTableTr';
import { yearlyDataType } from '../../types/commonTypes';
import classes from './ResultTable.module.css';

interface Props {
	data: yearlyDataType[];
	initialInvestment: number;
}
const ResultTable: FC<Props> = ({ data, initialInvestment }) => {
	return (
		<table className={classes.result}>
			<thead>
				<tr>
					<th>Year</th>
					<th>Total Savings</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{data.map(yearlyData => (
					<ResultTableTr
						key={yearlyData.year}
						yearlyData={yearlyData}
						initialInvestment={initialInvestment}
					/>
				))}
			</tbody>
		</table>
	);
};

export default ResultTable;
