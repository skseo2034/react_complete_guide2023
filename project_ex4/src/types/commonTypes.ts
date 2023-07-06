export interface UserInputType {
	'current-savings': number;
	'yearly-contribution': number;
	'expected-return': number;
	duration: number;
}

export interface yearlyDataType {
	year: number;
	yearlyInterest: number;
	savingsEndOfYear: number;
	yearlyContribution: number;
}
