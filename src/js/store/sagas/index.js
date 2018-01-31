import { takeLatest } from 'redux-saga/effects';

/* Types */
import { Types as BeerTypes } from 'store/ducks/beers';

/* Sagas */
import { getBeers } from './beers';

export default function* root() {
  yield [
    takeLatest(BeerTypes.BEERS_REQUEST, getBeers),
  ];
}
