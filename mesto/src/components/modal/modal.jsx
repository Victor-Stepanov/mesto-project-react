import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import ModalStyles from './modal.module.css';
import ModalOverlay from "../modal-overlay/modal-overlay";


const modalRoot = document.querySelector('#react-modals');

const Modal = ({ onClose, children }) => {

	//Закрыть модальных окон на Esc
	const handleEscKeydown = (evt) => {
		evt.key === "Escape" && onClose();
	}
	//Закрыли модальное окно на крестик
	const closeModalWithTheButton = (evt) => {
		evt.target && onClose();
	}

	useEffect(() => {
		document.addEventListener('keydown', handleEscKeydown);
		return () => {
			document.removeEventListener('keydown', handleEscKeydown);
		}
	})


	return ReactDOM.createPortal(
		<>
			<div className={ModalStyles.popup}>
				<div className={ModalStyles.popup__container}>
					<button onClick={closeModalWithTheButton} type="button" className={ModalStyles.popup__button_close}></button>
					<div>{children}</div>
				</div>
			</div>
			<ModalOverlay onClick={onClose} />
		</>,
		modalRoot
	)
}

export default Modal;