
function createDescriptionBreeds(breed, arr) {
  return arr
    .map(
      cats =>
        `<img class="img-block" src=${breed.url} alt="" widht="300px" height="300px"></img>
        <div class="info-wrapper">
        <h1>${cats.name}</h1>
      <p>${cats.description}</p>
      <p class="temperament">Temperament: <span class="span-temp">${cats.temperament}</span></p></div>`
    )
    .join('');
}

function createBreeds(arr) {
  return arr
    .map(
      cat => `<option value="${cat.reference_image_id}">${cat.name}</option>`
    )
    .join('');
}

export { createBreeds, createDescriptionBreeds }