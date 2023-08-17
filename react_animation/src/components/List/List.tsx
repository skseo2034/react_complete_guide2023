import React, { Component, useRef, useState } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

import './List.css';

const List = () => {
	const nodeRef = useRef(null);
	const [items, setItems] = useState([1, 2, 3]);

	const addItemHandler = () => {
		setItems(prevState => prevState.concat(prevState.length + 1));
	};

	const removeItemHandler = (selIndex: number): void => {
		setItems(prevState => prevState.filter((item, index) => index !== selIndex));
	};

	return (
		<>
			<div>
				<button className="Button" onClick={addItemHandler}>
					Add Item
				</button>
				<p>Click Item to Remove.</p>
				{/*<ul className="List">
					{items.map((item, index) => (
						<li key={index} className="ListItem" onClick={e => removeItemHandler(index)}>
							{item}
						</li>
					))}
				</ul>*/}
				<TransitionGroup component="ul" className="List">
					{items.map((item, index) => (
						<CSSTransition nodeRef={nodeRef} key={index} classNames="fade" timeout={300}>
							<li ref={nodeRef} className="ListItem" onClick={e => removeItemHandler(index)}>
								{item}
							</li>
						</CSSTransition>
					))}
				</TransitionGroup>
			</div>
		</>
	);
};

export default List;
