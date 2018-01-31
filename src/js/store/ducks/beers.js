import { createActions, createReducer } from 'reduxsauce';

/* Types & Creators */

const { Types, Creators } = createActions({
  beersRequest: null,
  beersSuccess: ['data'],
  beersFailure: null,

  beerSelect: ['id'],
});

export { Types };
export default Creators;

/* Initial State */

const INITIAL_STATE = {
  beers: [],
  beerSelected: {},
  loading: false,
  error: false,
};

/* Reducers */

export const request = state => ({
  ...state,
  loading: true,
  beerSelect: {},
});

export const success = (state, action) => ({
  beers: action.data,
  loading: false,
  error: false,
});

export const failure = state => ({
  ...state,
  loading: false,
  error: true,
});

export const select = (state, action) => ({
  ...state,
  beerSelected: state.beers.find(b => b.id === action.id),
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.BEERS_REQUEST]: request,
  [Types.BEERS_SUCCESS]: success,
  [Types.BEERS_FAILURE]: failure,

  [Types.BEER_SELECT]: select,
});
