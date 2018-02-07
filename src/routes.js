import React from 'react';
import { Route, IndexRoute } from 'react-router';
import app from './components/app';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CharactersPage from './components/characters/CharactersPage';
import ManageCharacterPage from './components/characters/ManageCharacterPage';
import AniListPage from './components/anilist/AniListSideBar';

export default (
  <Route path="/" component={app}>
    <IndexRoute component={HomePage} />
    <Route path="characters" component={CharactersPage} />
    <Route path="character" component={ManageCharacterPage} />
    <Route path="character/:name" component={ManageCharacterPage} />
    <Route path="anilist" component={AniListPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
