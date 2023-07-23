import React, { useEffect, useState } from 'react';

const useInput = (validateValue: (enteredValue: string) => boolean) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [isTouched, setIsTouched] = useState(false);

	const valueIsValid = validateValue(enteredValue);
	console.log('valueIsValid', valueIsValid, isTouched);
	const hasError = !valueIsValid && isTouched;
	console.log('hasError', hasError);
	const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredValue(event.target.value);
	};

	const inputBlurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsTouched(true);
	};

	const reset = () => {
		setEnteredValue('');
		setIsTouched(false);
	};
	return {
		value: enteredValue,
		isValid: valueIsValid,
		hasError,
		valueChangeHandler,
		inputBlurHandler,
		reset,
	};
};

export default useInput;
