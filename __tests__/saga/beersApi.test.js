import SagaTester from 'redux-saga-tester';
import MockAdapter from 'axios-mock-adapter';

import rootSaga from 'store/sagas';
import BeerActions, { Types as BeerTypes } from 'store/ducks/beers';

import api from 'services/api';

const beersApi = require('./fixtures/beersApi.json');

describe('Testing beers api saga', () => {
	let sagaTester = null;
	let apiMock = null;

	beforeEach(() => {
		sagaTester = new SagaTester({});
		apiMock = new MockAdapter(api);

		sagaTester.start(rootSaga);
	});

	it('can request beers', async () => {
		apiMock.onGet('/beers').reply(200, beersApi);

		sagaTester.dispatch(BeerActions.beersRequest());

		await sagaTester.waitFor(`${BeerTypes.BEERS_SUCCESS}`);

		expect(sagaTester.getLatestCalledActions()[0])
			.toEqual(BeerActions.beersSuccess(beersApi));
	});

	it('throws request beers', async () => {
		apiMock.onGet('/beers').reply(400);

		sagaTester.dispatch(BeerActions.beersRequest());

		await sagaTester.waitFor(`${BeerTypes.BEERS_FAILURE}`);

		expect(sagaTester.getLatestCalledActions()[0])
			.toEqual(BeerActions.beersFailure());
	});

	it('failure request beers', async () => {
		apiMock.onGet('/beers').reply(203);

		sagaTester.dispatch(BeerActions.beersRequest());

		await sagaTester.waitFor(`${BeerTypes.BEERS_FAILURE}`);

		expect(sagaTester.getLatestCalledActions()[0])
			.toEqual(BeerActions.beersFailure());
	});

	it('can select beer', async () => {
		apiMock.onGet('/beers').reply(200, beersApi);
		sagaTester.dispatch(BeerActions.beersRequest());

		await sagaTester.waitFor(`${BeerTypes.BEERS_SUCCESS}`);
		const beer = beersApi[0];

		sagaTester.dispatch(BeerActions.beerSelect(beer.id));

		expect(sagaTester.getLatestCalledActions()[0])
			.toEqual(BeerActions.beerSelect(beer.id));
	});
});