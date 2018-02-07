import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

// Called once by provider at entrypoint to attach app to store.

export default function configureStore(initalState) {
  return createStore(
    rootReducer,
    initalState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
