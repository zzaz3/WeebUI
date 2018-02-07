import * as types from '../actions/actionTypes';

// Empty starter object needed for /characters route.
const initialState = {
  results: [{
    name: ''
  }]
};

export default function characterReducer(state = initialState, action) {
  switch(action.type){
    case types.LOAD_CHARACTERS_SUCCESS:
      return action.characters;

    default:
      return state;
  }
}
