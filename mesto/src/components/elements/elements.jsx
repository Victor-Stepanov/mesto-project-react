import React, { useState, useEffect } from 'react';
import elementsStyles from './elements.module.css';



const Elements = () => {

	

	return (
		<section className={elementsStyles.elements}>
			
					<Element />
				
		</section>
	)
}

const Element = () => {
	//нужен id карты, id создателя карточки и если id === userId, то можно удалять
	


	return (
		<div className={elementsStyles.element}>
			<img className={elementsStyles.element__image} />
			<div className={elementsStyles.element__info}>
				<h2 className={elementsStyles.element__name}></h2>
				<div className={elementsStyles.element__like}>
					<button className={elementsStyles.element__like_btn} type="button"></button>
					<span className={elementsStyles.element__like_counter}></span>
				</div>
			</div>
		</div>
	)
}

export default Elements;