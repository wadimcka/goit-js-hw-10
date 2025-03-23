// import Notiflix from 'notiflix';
// const ENDPOINT = 'https://api.thecatapi.com/v1/';
// const API_KEY =
//   'live_KwKIuJAraYILJFhzqFoYAqreSVXHhB2qZj5uszNa8BSJ1dQQQUiTZlnD3ZAl53YU';

// const options = {
//   method: 'GET',
//   headers: { 'x-api-key': API_KEY },
// };

// export function fetchBreeds() {
//   return fetch(`${ENDPOINT}breeds`, options)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Список пород не загрузился пород.');
//       }
//       return response.json();
//     })
//     .catch(error => {
//       console.error('Error fetching breeds:', error);
//       Notiflix.Notify.failure(
//         'Something went wrong!!! Try reloading the page!'
//       );
//       return Promise.reject(error);
//     });
// }

// export function fetchCatByBreed(breedId) {
//   if (breedId)
//     return fetch(`${ENDPOINT}images/search?breed_ids=${breedId}`, options)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Список пород не загрузился пород.');
//         }
//         return response.json();
//       })
//       .then(data => {
//         if (data.length === 0) {
//           throw new Error('Данные о коте не загрузились.');
//         }
//         return data;
//       })
//       .catch(error => {
//         console.error('Error fetching breeds:', error);
//         Notiflix.Notify.failure(
//           'Something went wrong!!! Try reloading the page!'
//         );
//         return Promise.reject(error);
//       });
// }
//
// 21.03.25
import axios from 'axios';

const API_KEY =
  'live_B4VVqc0aL3tvwv7f4zAikkSi1tt7KisS8aecaVOPixDv48MbEFlx1j5sL88MXK8P';
const BASE_URL = 'https://api.thecatapi.com/v1/';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'x-api-key': API_KEY,
  },
});

function fetchBreeds() {
  return instance.get('breeds').then(resp => resp.data);
}

function fetchCatByBreed(breedId) {
  return instance
    .get(`images/search?breed_ids=${breedId}`)
    .then(resp => resp.data);
}

export default { fetchBreeds, fetchCatByBreed };
