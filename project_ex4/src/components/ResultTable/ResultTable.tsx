import React, { FC } from 'react';
import ResultTableTr from './ResultTableTr';
import { yearlyDataType } from '../../types/commonTypes';
import classes from './ResultTable.module.css';

interface Props {
	yearlyList: yearlyDataType[];
}
const ResultTable: FC<Props> = ({ yearlyList }) => {
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
				{yearlyList.map(yearlyData => (
					<ResultTableTr yearlyData={yearlyData} />
				))}
			</tbody>
		</table>
	);
};

export default ResultTable;
