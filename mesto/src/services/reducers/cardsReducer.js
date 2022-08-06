import { GET_CARDS_ERROR, GET_CARDS_REQUEST, GET_CARDS_SUCCESS } from '../actions/cards';

const initialState = {
	cards: [],
	cardsRequest: false,
	cardsFailed:false
}

export const cardsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CARDS_REQUEST: {
			return {
				...state,
				cardsRequest: true
			}
		}
		case GET_CARDS_SUCCESS: {
			return {
				...state,
				cards:action.cards,
				cardsRequest: false,
				cardsFailed:false
			}
		}
		case GET_CARDS_ERROR: {
			return {
				...state,
				cardsRequest: false,
				cardsFailed:true,
			}
			}
		default: {
			return state;
		}
	}
}