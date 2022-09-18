import { config } from "./const";
class Api {
	constructor(config) {
		this._url = config.baseUrl;
		this._headers = config.headers;
	}

	//Парсинг ответа
	_parseResponse(res) {
		return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
	}
	//Вытягиваие карточек с сервера
	async getCardsFromServer() {
		const res = await fetch(`${this._url}/cards`, {
			headers: this._headers,
		});
		return this._parseResponse(res);
	}
	//Добавление своей карточки
	async postCard(card) {
		const res = await fetch(`${this._url}/cards`, {
			method: "POST",
			headers: this._headers,
			body: JSON.stringify({
				name: card.name,
				link: card.link,
			}),
		});
		return this._parseResponse(res);
	}
	//Удаление карточки
	async deleteCard(cardId) {
		const res = await fetch(`${this._url}/cards/${cardId}`, {
			method: "DELETE",
			headers: this._headers,
		});
		return this._parseResponse(res);
	}
	//Добавление лайка
	async addLike(id) {
		const res = await fetch(`${this._url}/cards/likes/${id}`, {
			method: "PUT",
			headers: this._headers,
		});
		return this._parseResponse(res);
	}
	//Удаление лайка
	async deleteLike(id) {
		const res = await fetch(`${this._url}/cards/likes/${id}`, {
			method: "DELETE",
			headers: this._headers,
		});
		return this._parseResponse(res);
	}
	//Получение данных о пользователе
	async getUserInfoFromServer() {
		const res = await fetch(`${this._url}/users/me`, {
			headers: this._headers,
		});
		return this._parseResponse(res);
	}
	//Добавление пользователя
	async updateUser({ name, about }) {
		const res = await fetch(`${this._url}/users/me`, {
			method: "PATCH",
			headers: this._headers,
			body: JSON.stringify({ name, about }),
		});
		return this._parseResponse(res);
	}
	//Смена аватарки
	async updateAvatar({ avatar }) {
		const res = await fetch(`${this._url}/users/me/avatar`, {
			method: "PATCH",
			headers: this._headers,
			body: JSON.stringify({ avatar }),
		});
		return this._parseResponse(res);
	}
}

export default new Api(config);
