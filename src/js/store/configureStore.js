import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createHistory from 'history/createBrowserHistory';

import {
  syncHistoryWithStore,
  routerMiddleware,
} from 'react-router-redux';

export default (rootReducer, rootSaga) => {
  const middleware = [];
  const enhancers = [];

  const history = createHistory();

  /* Saga */
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);
  middleware.push(routerMiddleware(history));

  enhancers.push(applyMiddleware(...middleware));

  /* Store */
  const store = createStore(rootReducer, compose(...enhancers));

  /* Run Saga */
  sagaMiddleware.run(rootSaga);

  return { store, history };
};
