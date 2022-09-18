import api from "../../utils/api";
import { getRequest, requestSuccessed, requestFailed } from '../slice/userSlice';

export const getUserInfo = () => (dispatch) => {
	dispatch(getRequest())
	api.getUserInfoFromServer()
		.then(responce => dispatch(requestSuccessed(responce)))
		.catch(_ => dispatch(requestFailed()))
}