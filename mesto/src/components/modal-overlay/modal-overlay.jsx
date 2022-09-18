import React from 'react';
import ModalOverlayStyles from './modal-overlay.module.css';

const ModalOverlay = ({onClick}) => (
    <div className={ModalOverlayStyles.overlay} onClick={onClick}></div>
)

export default ModalOverlay;