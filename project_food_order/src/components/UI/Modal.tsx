import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import { FC } from 'react';

const Backdrop = (props: { onHideCart: () => void }) => {
	return <div className={classes.backdrop} onClick={props.onHideCart} />;
};

const ModalOverlay = (props: { children: React.ReactNode }) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};

interface Props {
	children: React.ReactNode;
	onHideCart: () => void;
}
const Modal: FC<Props> = ({ children, onHideCart }) => {
	const portalElement = document.getElementById('overlays') as HTMLDivElement;
	return (
		<>
			{ReactDOM.createPortal(<Backdrop onHideCart={onHideCart} />, portalElement)}
			{ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
		</>
	);
};

export default Modal;
