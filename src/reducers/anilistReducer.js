import * as types from '../actions/actionTypes';

export default function anilistReducer(state = [], action) {
  switch(action.type){
    case types.LOAD_ANILIST_SUCCESS:
      return action.list;

    default:
      return state;
  }
}
