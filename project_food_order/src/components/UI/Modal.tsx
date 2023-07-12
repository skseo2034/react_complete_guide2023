import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props: any) => {
	return <div className={classes.backdrop} />;
};

const ModalOverlay = (props: { children: React.ReactNode }) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};

const Modal = (props: { children: React.ReactNode }) => {
	console.log('seo111 >>>>>>>>>>>>');
	const portalElement = document.getElementById('overlays') as HTMLDivElement;
	return (
		<>
			{ReactDOM.createPortal(<Backdrop />, portalElement)}
			{ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
		</>
	);
};

export default Modal;
