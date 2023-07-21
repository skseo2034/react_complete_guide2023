import { useRef, useState } from 'react';

const SimpleInput = (props: any) => {
	const nameInputRef = useRef<HTMLInputElement>(null);
	const [enteredName, setEnteredName] = useState('');

	const nameInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredName(event.target.value);
	};

	const formSubmissionHandler = (event: React.FormEvent) => {
		event.preventDefault();

		if (enteredName.trim() === '') {
			return;
		}

		console.log('enteredName', enteredName);

		const enteredValue = nameInputRef.current!.value;
		console.log('enteredValue', enteredValue);

		// 이렇게 할수 있으나, 하지 말아야 한다.
		// 이것은 바닐라 javascript 로 직접 dom 을 제어하는 것이다.
		// 직접 조작하는것은 이상적이지 않은 방식이다.
		// React 가 제어하게 해야 한다.
		// nameInputRef.current!.value = '';

		setEnteredName('');
	};

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className="form-control">
				<label htmlFor="name">Your Name</label>
				<input ref={nameInputRef} type="text" id="name" onChange={nameInputChangeHandler} value={enteredName} />
			</div>
			<div className="form-actions">
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
