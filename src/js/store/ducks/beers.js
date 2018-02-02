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
  data: [],
  beerSelected: {},
  loading: false,
  error: false,
};

/* Reducers */

export const request = state => ({
  ...state,
  loading: true,
  beerSelected: {},
});

export const success = (state, action) => ({
  data: action.data,
  loading: false,
  error: false,
});

export const failure = state => ({
  data: [],
  loading: false,
  error: true,
});

export const select = (state, action) => ({
  ...state,
  beerSelected: state.data.find(b => b.id === action.id),
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.BEERS_REQUEST]: request,
  [Types.BEERS_SUCCESS]: success,
  [Types.BEERS_FAILURE]: failure,

  [Types.BEER_SELECT]: select,
});
