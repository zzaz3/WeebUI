import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadCharacters } from './actions/characterActions';
import { loadAniList } from './actions/aniActions';


 // Could pass in inital state here from server.
const store = configureStore();
store.dispatch(loadCharacters());
store.dispatch(loadAniList());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
