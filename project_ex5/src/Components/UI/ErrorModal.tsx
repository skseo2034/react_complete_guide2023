import React, { FC } from 'react';
import classes from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';
import ReactDOM from 'react-dom';

interface Props {
	title: string;
	message: string;
	onConfirm: () => void;
}

const Backgrop = (props: { onConfirm: () => void }) => {
	return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props: { title: string; message: string; onConfirm: () => void }) => {
	return (
		<Card cssClass={classes.modal}>
			<header className={classes.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={classes.content}>
				<p>{props.message}</p>
			</div>
			<footer className={classes.actions}>
				<Button onClick={props.onConfirm}>Okay</Button>
			</footer>
		</Card>
	);
};

const ErrorModal: FC<Props> = ({ title, message, onConfirm }) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backgrop onConfirm={onConfirm} />,
				document.getElementById('backdrop-root') as HTMLElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
				document.getElementById('overlay-root') as HTMLElement
			)}
		</>
	);
};

export default ErrorModal;
