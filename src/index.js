import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const selectEl = document.querySelector('.breed-select');
const infoEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');

let breedId = '';
let containerEl;

document.addEventListener('DOMContentLoaded', onPageLoad);
selectEl.addEventListener('change', updateBreedId);

function onPageLoad(event) {
  fetchBreeds().then(data => {
    breedListMarkup(data);
  });
}

function breedListMarkup(data) {
  const catBreeds = data
    .map(item => {
      return `<option value="${item.id}">${item.name}</option>`;
    })
    .join('');

  selectEl.innerHTML = catBreeds;

  new SlimSelect({
    select: '.breed-select',
    settings: {
      showSearch: true,
    },
  });
}

function updateBreedId(event) {
  breedId = event.target.value;
  loaderEl.classList.add('visible');

  const containerEl = infoEl.querySelector('.container');

  if (containerEl) {
    containerEl.style.display = 'none';
  }

  fetchCatByBreed(breedId)
    .then(data => {
      catCardMarkup(data);
    })
    .catch(error => {
      console.error('Error fetching breeds:', error);
      loaderEl.classList.remove('visible');
      Notiflix.Notify.failure(
        'Something went wrong!!! Try reloading the page!'
      );
    });
}

function catCardMarkup(data) {
  const catCard = data
    .map(item => {
      return `
        <div class="container">
          <img class="cat-img" src="${item.url}" alt="${item.breeds[0].name}">
          <h2>${item.breeds[0].name}</h2>
          <p>Description: ${item.breeds[0].description}</p>
          <p>Temperament: ${item.breeds[0].temperament}</p>
        </div>
      `;
    })
    .join('');

  infoEl.innerHTML = catCard;

  if (containerEl) {
    containerEl.style.display = 'block';
  }
  loaderEl.classList.remove('visible');
}
