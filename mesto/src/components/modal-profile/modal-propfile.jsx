import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import ModalProfileInfoStyles from './modal-profile.module.css';


const ModalProfileInfo = ({ title }) => {

	const dispatch = useDispatch();

	const [name, setName] = useState('')
	const [about, setAbout] = useState('')

	
	const handlerSendInfo = (e) => {
		e.preventDefault();
		
	}
	
	return (
		<div>
			<h3 className={ModalProfileInfoStyles.popup__title}>Редактировать профиль</h3>
			<form name="profileform" className={ModalProfileInfoStyles.popup__form}>
				<input onChange={(e) => setName(e.target.value)} name="name" pattern="^[A-Za-zА-Яа-яЁё\s]+$" type="text" className={ModalProfileInfoStyles.popup__input} minLength="2" maxLength="40"
					placeholder="Жак-Ив Кусто" required></input>
				<input onChange={(e) => setAbout(e.target.value)} name="about" pattern="^[A-Za-zА-Яа-яЁё\s]+$" type="text" className={ModalProfileInfoStyles.popup__input} minLength="2"
					maxLength="200" placeholder="Исследователь океана" required></input>
				<button onClick={handlerSendInfo} className={ModalProfileInfoStyles.popup__button}>Сохранить</button>
			</form>

		</div>
	)
}

export default ModalProfileInfo;