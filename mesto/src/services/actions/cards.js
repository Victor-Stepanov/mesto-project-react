import {getInitialCards, deleteCard, addLikeCard, removeLikeCard} from '../../utils/api'

//action
export const GET_CARDS_REQUEST = 'GET_CARDS_REQUEST'; //запрос на получение карточек
export const GET_CARDS_SUCCESS = 'GET_CARDS_SUCCESS'; //успешный запрос 
export const GET_CARDS_ERROR = 'GET_CARDS_ERROR';

export const DELETE_CARD_REQUEST = 'DELETE_CARD_REQUEST';
export const DELETE_CARD_SUCCESS = 'DELETE_CARD_SUCCESS';
export const DELETE_CARD_ERROR = 'DELETE_CARD_ERROR';

export const PUT_LIKE_REQUEST = 'PUT_LIKE_REQUEST';
export const PUT_LIKE_SUCCESS = 'PUT_LIKE_SUCCESS';
export const PUT_LIKE_ERROR = 'PUT_LIKE_ERROR';

export const DELETE_LIKE_REQUEST = 'DELETE_LIKE_REQUEST';
export const DELETE_LIKE_SUCCESS = 'DELETE_LIKE_SUCCESS';
export const DELETE_LIKE_ERROR = 'DELETE_LIKE_ERROR';

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

export const addLikeCardFromServer = (id) => (dispatch) => {
	dispatch({
		type:PUT_LIKE_REQUEST
	})
	addLikeCard(id)
		.then(res => {
			dispatch({
				type: PUT_LIKE_SUCCESS,
				data:res
		})
		})
		.catch(_ => {
			dispatch({
			type:PUT_LIKE_ERROR
		})
	})

}

export const removeLikeCardFromServer = (id) => (dispatch) => {
	dispatch({
		type:DELETE_LIKE_REQUEST
	})
	removeLikeCard(id)
		.then(res => {
			dispatch({
				type: DELETE_LIKE_SUCCESS,
				data:res
		})
		})
		.catch(_ => {
			dispatch({
			type:DELETE_LIKE_ERROR
		})
	})

}

