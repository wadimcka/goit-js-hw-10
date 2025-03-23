import { ref } from './helpers';
import SlimSelect from 'slim-select';

function selectOptionsMarkup(data) {
  const breeds = data
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
  ref.selectEl.innerHTML = breeds;
  new SlimSelect({
    select: ref.selectEl,
  });
}

function catCardMarkup(data) {
  if (!data.length) {
    throw new Error('No info');
  }
  const { breeds, url } = data[0];
  const { description, name, temperament } = breeds[0];
  const catCard = `
      <img src="${url}" alt="${name}" height="300px" class="cat-img">
      <div class="descriptionWarper">
      <h1 class="title"> ${name}</h1> 
      <p>${description}</p>
      <p><strong>Temperament:</strong> ${temperament}</p>
      </div>
      `;
  ref.catInfoEl.innerHTML = catCard;
}

export { selectOptionsMarkup, catCardMarkup };
