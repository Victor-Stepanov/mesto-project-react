import { getInfoAboutUser } from '../../utils/api';
import { GET_CARDS_ERROR } from './cards';

//actions
export const GET_INFO_REQUEST = 'GET_INFO_REQUEST';
export const GET_INFO_SUCCESS = 'GET_INFO_SUCCESS';
export const GET_INFO_ERROR = 'GET_INFO_ERROR';

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