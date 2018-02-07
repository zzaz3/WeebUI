import * as types from './actionTypes';

// Actions.

export function loadCharactersSuccess(characters) {
  return { type: types.LOAD_CHARACTERS_SUCCESS, characters};
}

// Async API calls?



export function loadCharacters() {
  return function(dispatch) {
    return fetch(`https://swapi.co/api/people/`)
  .then(res => res.json())
  .then(
    data => dispatch(loadCharactersSuccess(data)))
    .catch(error => {
      throw(error);
    });
  };
}
