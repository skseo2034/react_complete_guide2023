import React, { FC } from 'react';
import './Cart.css';
import ChartBar from './ChartBar';

interface Props {
	dataPoints: { value: number; label: string }[];
}

const Cart: FC<Props> = ({ dataPoints }) => {
	const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
	const toalMaximum = Math.max(...dataPointValues);

	return (
		<div className="chart">
			{dataPoints.map(dataPoint => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={toalMaximum}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Cart;
