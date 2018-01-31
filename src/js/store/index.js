/* Redux */
import { combineReducers } from 'redux';

/* Reducers */
import { routerReducer } from 'react-router-redux';
import { reducer as beers } from './ducks/beers';

import configureStore from './configureStore';
import rootSaga from './sagas';

export default () => {
  const rootReducer = combineReducers({
    routing: routerReducer,
    beers,
  });

  return configureStore(rootReducer, rootSaga);
};
