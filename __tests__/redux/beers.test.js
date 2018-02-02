import BeerActions, { reducer as beers } from 'store/ducks/beers';

const data = [
  { id: 1, name: 'Beer 1', description: 'Beer 1 description', image_url: 'image_url' },
  { id: 2, name: 'Beer 2', description: 'Beer 2 description', image_url: 'image_url' },
];

const INITIAL_STATE = {
  data: [],
  beerSelected: {},
  loading: false,
  error: false,
};

describe('Testing beers reducer', () => {
	it('can request beers', () => {
		const state = beers(INITIAL_STATE, BeerActions.beersRequest());

		expect(state.loading).toBe(true);
		expect(state.error).toBe(false);
	});

	it('can success beers', () => {
		 const state = beers(INITIAL_STATE, BeerActions.beersSuccess(data));

		 expect(state.data).toHaveLength(2);
		 expect(state.data).toBe(data);
		 expect(state.data[0]).toBe(data[0]);

		 expect(state.loading).toBe(false);
		 expect(state.error).toBe(false);
	});

	it('can failure beers', () => {
		const state = beers(INITIAL_STATE, BeerActions.beersFailure());

		expect(state.loading).toBe(false);
		expect(state.error).toBe(true);
		expect(state.data).toEqual([]);
	});

	it('can select beer', () => {
		let state = beers(INITIAL_STATE, BeerActions.beersSuccess(data));
		expect(state.data).toEqual(data);

		state = beers(state, BeerActions.beerSelect(1));
		expect(state.beerSelected).toEqual(data[0]);
	})
});