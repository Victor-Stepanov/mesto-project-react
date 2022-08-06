import { GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_ERROR } from '../actions/user';

const initialState = {
	info: {},
	infoRequest: false,
	infoFailed:false
}

export const infoReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_INFO_REQUEST: {
			return {
				...state,
				infoRequest:true
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