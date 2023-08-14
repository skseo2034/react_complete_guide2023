import React from 'react';

import './Modal.css';

const modal = (props: { closed: () => void; show: boolean }) => {
	console.log('Modal', props);
	const cssClasses = ['Modal', props.show ? 'ModalOpen' : 'ModalClose'];
	return (
		<div className={cssClasses.join(' ')}>
			<h1>A Modal</h1>
			<button className="Button" onClick={props.closed}>
				Dismiss
			</button>
		</div>
	);
};

export default modal;
