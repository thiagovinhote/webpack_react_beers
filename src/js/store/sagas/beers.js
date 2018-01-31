import axios from 'axios';

import { call, put } from 'redux-saga/effects';
import BeersActions from 'store/ducks/beers';

export function* getBeers() {
  const response = yield call(axios.get, 'https://api.punkapi.com/v2/beers');

  if (response.data) {
    yield put(BeersActions.beersSuccess(response.data));
  } else {
    yield put(BeersActions.beersFailure());
  }
}
