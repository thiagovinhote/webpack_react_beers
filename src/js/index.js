import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

/* Store */
import { Provider } from 'react-redux';
import configureStore from 'store';

/* Navigation */
import Routes from 'navigation';

const { store, history } = configureStore();

const App = () => (
  <Provider store={store}>
    <Routes history={history} />
  </Provider>
);

const app = document.getElementById('app');
ReactDOM.render(<App />, app);
