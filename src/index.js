import { fetchBreeds, fetchCatByBreed } from './cat-api';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';


const loaded = document.querySelector('.mask');
const select = document.querySelector('#selectElement');
const infoCat = document.querySelector('.cat-info');
select.addEventListener('change', selectBreed);

function selectBreed() {
    loaded.classList.remove('load-remove');
  fetchCatByBreed(select.value)
    .then(breed => {
    setTimeout(() => {
    loaded.classList.add('load-remove');
}, 600);
      infoCat.innerHTML = `<img class="img-block" src=${
        breed.url
      } alt="" widht="300px" height="300px">${createDescriptionBreeds(
        breed.breeds
      )}`;
    })
    .catch(() => {
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    });
}

fetchBreeds()
  .then(cat => {
    setTimeout(() => {
    loaded.classList.add('load-remove');
}, 600);
    select.insertAdjacentHTML('beforeend', createBreeds(cat));
    new SlimSelect({
      select: select,
    });
  })
  .catch(() => {
    Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    );
  });

function createBreeds(arr) {
  return arr
    .map(
      cat => `<option value="${cat.reference_image_id}">${cat.name}</option>`
    )
    .join('');
}

function createDescriptionBreeds(arr) {
  return arr
    .map(
      cats =>
        `<div class="info-wrapper">
        <h1>${cats.name}</h1>
      <p>${cats.description}</p>
      <p class="temperament">Temperament: <span class="span-temp">${cats.temperament}</span></p></div>`
    )
    .join('');
}
