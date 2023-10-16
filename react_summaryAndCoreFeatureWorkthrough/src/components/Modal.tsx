import React from 'react';
import classes from './Modal.module.css';

// const Modal = (props: { children: React.ReactNode }) => {
const Modal = ({ children, onClose }: { children: React.ReactNode; onClose: () => void }) => {
	return (
		<>
			<div className={classes.backdrop} onClick={onClose} />
			<dialog open className={classes.modal}>
				{children}
			</dialog>
			;
		</>
	);
};

export default Modal;
