import api from 'services/api';

import { call, put } from 'redux-saga/effects';
import BeersActions from 'store/ducks/beers';

export function* getBeers() {
  try {
    const response = yield call(api.get, '/beers');

    if (response.status === 200) {
      yield put(BeersActions.beersSuccess(response.data));
    } else {
      yield put(BeersActions.beersFailure());
    }
  } catch (e) {
    yield put(BeersActions.beersFailure());
  }
}
