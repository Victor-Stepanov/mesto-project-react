import { GET_CARDS_ERROR, GET_CARDS_REQUEST, GET_CARDS_SUCCESS, DELETE_CARD_SUCCESS, DELETE_CARD_ERROR, DELETE_CARD_REQUEST } from '../actions/cards';

const initialState = {
	cards: [],
	cardsRequest: false,
	cardsFailed: false,
	
	cardDeleteRequest: false,
	carddDeleteFailed:false
}

export const cardsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CARDS_REQUEST: {
			return {
				...state,
				cardsRequest: true
			}
		}
		case DELETE_CARD_REQUEST: {
			return {
				...state,
				cardDeleteRequest:true
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
		case DELETE_CARD_SUCCESS: {
			return {
				...state,
				cardDeleteRequest: false,
				carddDeleteFailed:false,
				cards:[...state.cards].filter((item) => item._id !== action._id ),
			}
			}
		case GET_CARDS_ERROR: {
			return {
				...state,
				cardsRequest: false,
				cardsFailed:true,
			}
		}
		case DELETE_CARD_ERROR: {
			return {
				...state,
				carddDeleteFailed: true,
				cardDeleteRequest:false
			}
			}
		default: {
			return state;
		}
	}
}