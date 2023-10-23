import React, { useRef } from 'react';
// import Transition from 'react-transition-group/Transition';

import './Modal.css';
// import CSSTransition from 'react-transition-group/CSSTransition';

const animationTiming = {
	enter: 400,
	exit: 1000,
};

const Modal = () => {
	const nodeRef = useRef<HTMLDivElement | null>(null);
	// console.log('Modal', props);

	return (
		<></>
		/*<Transition in={props.show} timeout={animationTiming} mountOnEnter unmountOnExit>
			{state => {
				const cssClasses = [
					'Modal',
					state === 'entering' ? 'ModalOpen' : state === 'exiting' ? 'ModalClosed' : null,
				];
				return (
					<div ref={nodeRef} className={cssClasses.join(' ')}>
						<h1>A Modal</h1>
						<button className="Button" onClick={props.closed}>
							Dismiss
						</button>
					</div>
				);
			}}
		</Transition>*/
		/*<CSSTransition
			nodeRef={nodeRef}
			//in={props.show}
			timeout={animationTiming}
			mountOnEnter
			unmountOnExit
			/!*classNames="fade-slide"*!/
			classNames={{
				enter: '',
				enterActive: 'ModalOpen',
				exit: '',
				exitActive: 'ModalClosed',
			}}
		>
			<div ref={nodeRef} className="Modal">
				<h1>A Modal</h1>
				{/!*<button className="Button" onClick={props.closed}>
					Dismiss
				</button>*!/}
			</div>
		</CSSTransition>*/
	);
};

export default Modal;
