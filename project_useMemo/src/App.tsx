import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
	const [listTitle, setListTitle] = useState('My List');

	const changeTitleHandler = useCallback(() => {
		setListTitle('New Title');
	}, []);

	// 같은 값을 전달 했음에도, 배열이므로 다른 배열을 생성해서 전달 함으로인해 새로운 값으로 인식한다.
	// 따라서 useMemo 를 사용해서 값을 기억하게 한다.
	const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
	// const listItems = [5, 3, 1, 10, 9];

	return (
		<div className="app">
			<DemoList title={listTitle} items={listItems} />
			<Button onClick={changeTitleHandler}>Change List Title</Button>
		</div>
	);
}

export default App;
