const token = '78c185d4-31af-42e6-8e64-c3782dbb21e3';
const BASE_URL = 'https://nomoreparties.co/v1/plus-cohort7';
export const config = {
	baseUrl: BASE_URL,
	headers: {
		authorization: token,
		'Content-Type': 'application/json'
	}
}
