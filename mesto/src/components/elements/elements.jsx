import React, { useState, useEffect } from 'react';
import elementsStyles from './elements.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getInitialCardsFromServer } from '../../services/actions/cards'


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
	console.log(props)
	return (
		<div className={elementsStyles.element}>
			<img className={elementsStyles.element__image} src={props.link} alt={props.name} />
			<div className={elementsStyles.element__info}>
				<h2 className={elementsStyles.element__name}>{props.name}</h2>
				<div className={elementsStyles.element__like}>
					<button className={elementsStyles.element__like_btn} type="button"></button>
					<span className={elementsStyles.element__like_counter}>{props.likes.length}</span>
				</div>
			</div>
			<button className={elementsStyles.element__delete_btn}></button>
		</div>
	)
}

export default Elements;