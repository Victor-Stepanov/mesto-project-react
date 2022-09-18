import React from 'react';
import { useSelector } from 'react-redux';
import elementsStyles from './elements.module.css';



const Elements = () => {
	const { cards } = useSelector(state => state.cardsData)
	console.log(cards)

	return (
		<section className={elementsStyles.elements}>
			{cards.length !== 0 && cards.map((item) => <Element element={item} key={item._id} />)}
		</section>
	)
}

const Element = ({ element }) => {
	//нужен id карты, id создателя карточки и если id === userId, то можно удалять

	const handlerDeleteCard = (event) => {
		console.log(event.target)

	}
	const handlerLikeCard = (event) => {
		console.log(event)
	}

	const likesCount = element.likes.length;

	return (
		<>
			{element &&
				<div className={elementsStyles.element}>
					<img className={elementsStyles.element__image} src={element.link} alt={element.name} />
					<div className={elementsStyles.element__info}>
						<h2 className={elementsStyles.element__name}>{element.name}</h2>
						<div className={elementsStyles.element__like}>
							<button onClick={handlerLikeCard} className={elementsStyles.element__like_btn} type="button"></button>
							<span className={elementsStyles.element__like_counter}>{likesCount}</span>
						</div>
					</div>
					<button onClick={handlerDeleteCard} className={elementsStyles.element__delete_btn} type="button"></button>
				</div>
			}
		</>
	)
}


export default Elements;