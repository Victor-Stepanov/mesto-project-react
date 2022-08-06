import {getInitialCards} from '../../utils/api'

//action
export const GET_CARDS_REQUEST = 'GET_CARDS_REQUEST'; //запрос на получение карточек
export const GET_CARDS_SUCCESS = 'GET_CARDS_SUCCESS'; //успешный запрос 
export const GET_CARDS_ERROR = 'GET_CARDS_ERROR';

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