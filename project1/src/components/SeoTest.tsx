import React, { useState } from 'react';

const SeoTest = () => {
	const [counter, setCounter] = useState(0);

	const buttonClickHandler = () => {
		setCounter(prevState => prevState + 1);
	};

	return (
		<div>
			<p id="counter">{counter}</p>
			<button onClick={buttonClickHandler}>Increment</button>
		</div>
	);
};

export default SeoTest;
