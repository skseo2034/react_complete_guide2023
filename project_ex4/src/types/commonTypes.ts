export interface UserInputType {
	'current-savings': string;
	'yearly-contribution': string;
	'expected-return': string;
	duration: string;
}

export interface yearlyDataType {
	year: number;
	yearlyInterest: number;
	savingsEndOfYear: number;
	yearlyContribution: number;
}
