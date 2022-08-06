import { GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_ERROR, PUTCH_INFO_ERROR, PUTCH_INFO_SUCCESS, PUTCH_INFO_REQUEST } from '../actions/user';

const initialState = {
	info: {},
	infoRequest: false,
	infoFailed: false,
	
	infoUpdate: {
		name: '',
		about:''
	},
	infoUpdateRequest: false,
	infoUpdateFailed:false
}

export const infoReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_INFO_REQUEST: {
			return {
				...state,
				infoRequest:true
			}
		}
		case PUTCH_INFO_REQUEST: {
			return {
				...state,
				infoUpdateRequest:true
			}
		}
		case PUTCH_INFO_SUCCESS: {
			return {
				...state,
				infoUpdate: {
					...state.infoUpdate,
					name: action.name,
					about:action.about
				},
				infoUpdateRequest: false,
				infoUpdateFailed:false
			}
			}
		case GET_INFO_SUCCESS: {
			return {
				...state,
				info: action.user,
				infoRequest: false,
				infoFailed:false	
			}
		}
		case PUTCH_INFO_ERROR: {
			return {
				...state,
				infoUpdateFailed:true
			}
			}
		case GET_INFO_ERROR: {
			return {
				...state,
				infoRequest: false,
				infoFailed:true
			}
			}
		default: {
			return state;
		}
	}

}