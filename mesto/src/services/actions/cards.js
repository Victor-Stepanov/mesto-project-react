import {getInitialCards, deleteCard} from '../../utils/api'

//action
export const GET_CARDS_REQUEST = 'GET_CARDS_REQUEST'; //запрос на получение карточек
export const GET_CARDS_SUCCESS = 'GET_CARDS_SUCCESS'; //успешный запрос 
export const GET_CARDS_ERROR = 'GET_CARDS_ERROR';

export const DELETE_CARD_REQUEST = 'DELETE_CARD_REQUEST';
export const DELETE_CARD_SUCCESS = 'DELETE_CARD_SUCCESS';
export const DELETE_CARD_ERROR = 'DELETE_CARD_ERROR';

export const getInitialCardsFromServer = () => (dispatch) => {
	dispatch({
		type:GET_CARDS_REQUEST
	})
	getInitialCards()
		.then(res => {
			dispatch({
				type: GET_CARDS_SUCCESS,
				cards:res
			})
		})
		.catch(_ => {
			dispatch({
			type:GET_CARDS_ERROR
		})
	})
}

export const deleteCardFromServer = (id) => (dispatch) => {
	dispatch({
		type:DELETE_CARD_REQUEST
	})
	deleteCard(id)
		.then(res => {
			dispatch({
				type: DELETE_CARD_SUCCESS,
				data:res
			})
		})
		.catch(_ => {
			dispatch({
			type:DELETE_CARD_ERROR
		})
	})
}