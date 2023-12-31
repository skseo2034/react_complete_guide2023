import React, { useRef, useState } from 'react';
import Transition from 'react-transition-group/Transition';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

const App = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [showBlock, setShowBlock] = useState(false);
	const nodeRef = useRef(null);

	const showModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	const onShowBlockHandler = () => {
		setShowBlock(prevState => !prevState);
	};

	return (
		<div className="App">
			<h1>React Animations</h1>
			<button className="Button" onClick={onShowBlockHandler}>
				Toggle
			</button>
			<br />
			<Transition
				nodeRef={nodeRef}
				in={showBlock}
				timeout={300}
				mountOnEnter
				unmountOnExit
				onEnter={() => console.log('onEnter')}
				onEntering={() => console.log('onEntering')}
				onEntered={() => console.log('onEntered')}
				onExit={() => console.log('onExit')}
				onExiting={() => console.log('onExiting')}
				onExited={() => console.log('onExited')}
			>
				{state => (
					<div
						ref={nodeRef}
						style={{
							backgroundColor: 'red',
							width: 100,
							height: 100,
							margin: 'auto',
							transition: 'opacity 1s ease-out',
							opacity: state === 'exiting' ? 0 : 1,
						}}
					></div>
				)}
			</Transition>
			{/*<Transition nodeRef={nodeRef} in={modalIsOpen} timeout={300} mountOnEnter unmountOnExit>
				{state => <Modal show={state} closed={closeModal} />}
			</Transition>*/}
			<Modal show={modalIsOpen} closed={closeModal} />

			{modalIsOpen ? <Backdrop show /> : null}

			<button className="Button" onClick={showModal}>
				Open Modal
			</button>
			<h3>Animating Lists</h3>
			<List />
		</div>
	);
};

export default App;
