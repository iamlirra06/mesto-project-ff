import baseAvatar from "../images/avatar.jpg";

const config = {
  baseURL: "https://mesto.nomoreparties.co/v1/apf-cohort-202",
  headers: {
    authorization: "e68c9b33-96d0-4ca0-bce8-c71cc3f9909f",
    "Content-Type": "application/json",
  },
};

function getAboutMe() {
  return fetch(`${config.baseURL}/users/me`, {
    headers: config.headers,
  })
  .then((res) => getResponseData(res));
}

function getInitialCards() {
  return fetch(`${config.baseURL}/cards`, {
    headers: config.headers,
  })
  .then((res) => getResponseData(res));
}

function patchProfile(name, description) {
  return fetch(`${config.baseURL}/users/me`, {
    headers: config.headers,
    method: "PATCH",
    body: JSON.stringify({
      name: name,
      about: description,
    }),
  })
  .then((res) => getResponseData(res));
}

function postNewCard(name, link) {
  return fetch(`${config.baseURL}/cards`, {
    headers: config.headers,
    method: "POST",
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  })
  .then((res) => getResponseData(res));
}

function deleteCard(cardId) {
  return fetch(`${config.baseURL}/cards/${cardId}`, {
    headers: config.headers,
    method: "DELETE",
  })
  .then((res) => getResponseData(res));
}

function putLike(cardId) {
  return fetch(`${config.baseURL}/cards/likes/${cardId}`, {
    headers: config.headers,
    method: "PUT",
  })
  .then((res) => getResponseData(res));
}

function deleteLike(cardId) {
  return fetch(`${config.baseURL}/cards/likes/${cardId}`, {
    headers: config.headers,
    method: "DELETE",
  })
  .then((res) => getResponseData(res));
}

function patchAvatar(link) {
  return fetch(`${config.baseURL}/users/me/avatar`, {
    headers: config.headers,
    method: "PATCH",
    body: JSON.stringify({
      avatar: link,
    }),
  })
  .then((res) => getResponseData(res));
}

function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`); 
  }
  return res.json();
}

const baseUser = {
  name: "Жак-Ив Кусто",
  about: "Исследователь океана",
  avatar: baseAvatar,
  _id: "-1",
};

export {
  getAboutMe,
  getInitialCards,
  patchProfile,
  postNewCard,
  deleteCard,
  putLike,
  deleteLike,
  patchAvatar,
  baseUser
};
