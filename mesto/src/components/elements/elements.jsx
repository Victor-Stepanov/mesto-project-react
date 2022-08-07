import React, { useState, useEffect } from 'react';
import elementsStyles from './elements.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getInitialCardsFromServer, deleteCardFromServer, removeLikeCardFromServer, addLikeCardFromServer } from '../../services/actions/cards';


const Elements = () => {

	const { cards } = useSelector((state) => state.cardsData)

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getInitialCardsFromServer())
	}, [dispatch])

	return (
		<section className={elementsStyles.elements}>
			{cards.length !== 0 && (
				cards.map((item, index) => (
					<Element props={item} key={index} />
				))
			)}
		</section>
	)
}

const Element = ({ props }) => {
	//нужен id карты, id создателя карточки и если id === userId, то можно удалять
	const userID = useSelector(state => state.userData.info._id)
	const dispatch = useDispatch();

	const handlerDeleteCard = (ownerID, cardID) => {
		if (ownerID === userID) {
			dispatch(deleteCardFromServer(cardID))
		} else {
			alert('Can not delete card')
		}
	}

	const handlerChangeLike = (cardID) => {
		let arr = props.likes
		if (arr.includes(userID)) {
			console.log(arr.includes(userID))
			dispatch(removeLikeCardFromServer(cardID))
		} else {
			dispatch(addLikeCardFromServer(cardID))
		}

	}

	return (
		<div className={elementsStyles.element}>
			<img className={elementsStyles.element__image} src={props.link} alt={props.name} />
			<div className={elementsStyles.element__info}>
				<h2 className={elementsStyles.element__name}>{props.name}</h2>
				<div className={elementsStyles.element__like}>
					<button onClick={() => handlerChangeLike(props._id)} className={elementsStyles.element__like_btn} type="button"></button>
					<span className={elementsStyles.element__like_counter}>{props.likes.length}</span>
				</div>
			</div>
			{props.owner._id !== userID ?'' : <button onClick={() => handlerDeleteCard(props.owner._id, props._id)} className={elementsStyles.element__delete_btn}></button>}
		</div>
	)
}

export default Elements;