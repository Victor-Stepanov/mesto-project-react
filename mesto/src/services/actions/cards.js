import api from '../../utils/api';
import { getRequest, requestSuccessed, requestFailed } from '../slice/cardsSlice'

export const getCards = () => (dispatch) => {
	dispatch(getRequest())
	api.getCardsFromServer()
		.then(responce => {
			dispatch(requestSuccessed(responce))
		})
		.catch((_) => {
			dispatch(requestFailed())
		})
}