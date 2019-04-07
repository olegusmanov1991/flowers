import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MainPage from './pages/main';
import store from './store/store';

const root = document.getElementById('root');

render(
  <Provider store={store}>
    <MainPage />
  </Provider>, root,
);
