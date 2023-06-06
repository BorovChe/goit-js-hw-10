const BASE_URL = `https://api.thecatapi.com/v1`;
const API_KEY =
  'live_QL59bJWjaYSGOR1YRp5HCHVuLowsnZFQni9ZE73HClPPdvKNMSVDWEZD1r47vtZZ';


function fetchBreeds() {
    return fetch(`${BASE_URL}/breeds?key=${API_KEY}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
        }
    return resp.json();
  });
}

function fetchCatByBreed(breedId) {
    return fetch(`${BASE_URL}/images/${breedId}?key=${API_KEY}}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
        }
    return resp.json();
  });
}

export { fetchBreeds, fetchCatByBreed };
