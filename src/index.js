import { fetchBreeds, fetchCatByBreed } from './helpers-js/cat-api';
import { createBreeds, createDescriptionBreeds } from './helpers-js/render-cat'
import { select, loaded, infoCat } from './helpers-js/const-helper';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';


select.addEventListener('change', selectBreed);

function selectBreed() {
loaded.classList.remove('load-remove');
  fetchCatByBreed(select.value)
    .then(breed => {
removeSpinner()
infoCat.innerHTML = `${createDescriptionBreeds(breed, breed.breeds)}`;
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
    select.insertAdjacentHTML('beforeend', createBreeds(cat));
new SlimSelect({
  select: select,
});
  })
  .catch(() => {
renderErr()
  }).finally(() => {
removeSpinner()
    });;


function removeSpinner() {
        setTimeout(() => {
        loaded.classList.add('load-remove');
      }, 600);
}

  function renderErr() {
        Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    );
  } 