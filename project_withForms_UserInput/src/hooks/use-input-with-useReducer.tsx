import React, { useReducer } from 'react';

const initialInputState = {
	value: '',
	isTouched: false,
};

const inputSateReducer = (state: any, action: any) => {
	if (action.type === 'INPUT') {
		return { value: action.val, isTouched: state.isTouched };
	}

	if (action.type === 'BLUR') {
		return { value: state.value, isTouched: true };
	}

	if (action.type === 'RESET') {
		return { value: '', isTouched: false };
	}

	return {
		value: '',
		isTouched: false,
	};
};

const useInputWithUseReducer = (validateValue: (enteredValue: string) => boolean) => {
	const [inputState, dispatch] = useReducer(inputSateReducer, initialInputState);

	const valueIsValid = validateValue(inputState.value);
	const hasError = !valueIsValid && inputState.isTouched;

	const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: 'INPUT', value: event.target.value });
	};

	const inputBlurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: 'BLUR' });
	};

	const reset = () => {
		dispatch({ type: 'RESET' });
	};
	return {
		value: inputState.value,
		isValid: valueIsValid,
		hasError,
		valueChangeHandler,
		inputBlurHandler,
		reset,
	};
};

export default useInputWithUseReducer;
