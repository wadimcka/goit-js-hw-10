function changeVisibility(element) {
  element.classList.toggle('hidden');
}

const ref = {
  selectEl: document.querySelector('.breed-select'),
  loaderEl: document.querySelector('.loader'),
  catInfoEl: document.querySelector('.cat-info'),
};

export { changeVisibility, ref };
