import { config } from './const';

// Проверяем статус запроса
const checkStatus = (res) => {
	if (res.ok) {
		return res.json();
	}
	return Promise.reject(`Ошибка: ${res.status}`);
}
// 3.Получаем инфу о пользователи
export const getInfoAboutUser = () => {
	return fetch(`${config.baseUrl}/users/me`, {
		headers: config.headers
	})
		.then(res => checkStatus(res))
}

//4.Отправляем get запрос на получение карточек
export const getInitialCards = () => {
	return fetch(`${config.baseUrl}/cards`, {
		headers:config.headers
	})
	.then(res => checkStatus(res))
}

//6. Добавление новой карточки
export const sendCardFromServer = (card) => { }

//5. Редактирование профиля
export const updateProfileInfo = ({ name, about }) => { }

//10. Обновление аватара пользователя
export const updateProfilePhoto = ({ avatar }) => { }

//8. Удаление карточки
export const deleteCard = (cardId) => { }

//9. Постановка лайка

export const addLikeCard = (cardId) => { }

//9. Снятие лайка
export const removeLikeCard = (cardId) => { }