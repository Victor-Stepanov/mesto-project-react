import { getInfoAboutUser, updateProfileInfo } from '../../utils/api';
import { GET_CARDS_ERROR } from './cards';

//actions
export const GET_INFO_REQUEST = 'GET_INFO_REQUEST';
export const GET_INFO_SUCCESS = 'GET_INFO_SUCCESS';
export const GET_INFO_ERROR = 'GET_INFO_ERROR';

export const PUTCH_INFO_REQUEST = 'PUTCH_INFO_REQUEST';
export const PUTCH_INFO_SUCCESS = 'PUTCH_INFO_SUCCESS';
export const PUTCH_INFO_ERROR = 'PUTCH_INFO_ERROR';

export const getInfoAboutUserFromServer = () => (dispatch) => {
	dispatch({
		type:GET_INFO_REQUEST
	})
	getInfoAboutUser()
		.then(res => {
			dispatch({
				type: GET_INFO_SUCCESS,
				user:res
			})
		})
		.catch(_ => {
			dispatch({
			type:GET_CARDS_ERROR
		})
	})
}

export const sendUpdateProfileInfo = ({ name, about }) => (dispatch) => {
	dispatch({
		type:PUTCH_INFO_REQUEST
	})
	updateProfileInfo( name, about)
		.then(res => {
			dispatch({
				type: PUTCH_INFO_SUCCESS,
				name: res,
				about:res
			})
			
		})
		.catch(_ => {
			dispatch({
			type:PUTCH_INFO_ERROR
		})
	})
}