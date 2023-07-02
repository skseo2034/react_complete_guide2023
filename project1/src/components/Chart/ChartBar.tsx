import React, { FC } from 'react';
import './CartBar.css';

interface Props {
	value: number;
	maxValue: number;
	label: string;
}
const CartBar: FC<Props> = ({ value, maxValue, label }) => {
	let barFillHeight = '0%';

	if (maxValue > 0) {
		barFillHeight = Math.round((value / maxValue) * 100) + '%';
	}

	return (
		<div className="chart-bar">
			<div className="chart-bar__inner">
				<div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
			</div>
			<div className="chart-bar__label">{label}</div>
		</div>
	);
};

export default CartBar;
