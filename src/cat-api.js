import Notiflix from 'notiflix';
const ENDPOINT = 'https://api.thecatapi.com/v1/';
const API_KEY =
  'live_KwKIuJAraYILJFhzqFoYAqreSVXHhB2qZj5uszNa8BSJ1dQQQUiTZlnD3ZAl53YU';

const options = {
  method: 'GET',
  headers: { 'x-api-key': API_KEY },
};

export function fetchBreeds() {
  return fetch(`${ENDPOINT}breeds`, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Список пород не загрузился пород.');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching breeds:', error);
      Notiflix.Notify.failure(
        'Something went wrong!!! Try reloading the page!'
      );
      return Promise.reject(error);
    });
}

export function fetchCatByBreed(breedId) {
  if (breedId)
    return fetch(`${ENDPOINT}images/search?breed_ids=${breedId}`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Список пород не загрузился пород.');
        }
        return response.json();
      })
      .then(data => {
        if (data.length === 0) {
          throw new Error('Данные о коте не загрузились.');
        }
        return data;
      })
      .catch(error => {
        console.error('Error fetching breeds:', error);
        Notiflix.Notify.failure(
          'Something went wrong!!! Try reloading the page!'
        );
        return Promise.reject(error);
      });
}
