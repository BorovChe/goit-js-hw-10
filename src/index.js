import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { createBreeds, createDescriptionBreeds } from './render-cat'
import { variable } from './const-helper';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';

variable.select.addEventListener('change', selectBreed);

function selectBreed() {
 variable.loaded.classList.remove('load-remove');
  fetchCatByBreed(variable.select.value)
    .then(breed => {
removeSpinner()
   variable.infoCat.innerHTML = `${createDescriptionBreeds(breed, breed.breeds)}`;
    })
    .catch(() => {
renderErr()
    })
    .finally(() => {
removeSpinner()
    });
}

fetchBreeds()
  .then(cat => {
removeSpinner()
    variable.select.insertAdjacentHTML('beforeend', createBreeds(cat));
new SlimSelect({
  select: variable.select,
});
  })
  .catch(() => {
renderErr()
  }).finally(() => {
removeSpinner()
    });;


function removeSpinner() {
        setTimeout(() => {
        variable.loaded.classList.add('load-remove');
      }, 600);
}

  function renderErr() {
        Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    );
  }