import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Home from 'pages/Home';
import Card from 'components/Card';
import { BeatLoader } from 'react-spinners';

import BeerActions from 'store/ducks/beers';

const mockeStore = configureStore([]);

const initialState = {
  beers: {
    data: [
      { id: 1, name: 'Beer 1', description: 'Beer 1 description', image_url: 'image_url' },
      { id: 2, name: 'Beer 2', description: 'Beer 2 description', image_url: 'image_url' },
    ],
    loading: false,
    error: false,
  }
};

describe('Testing Home List', () => {
  let store = mockeStore(initialState);

  function createWrapper() {
    return shallow(
        <Home />,
        { context: { store } }
    );
  };

  it('renders as expected', () => {
    const wrapper = createWrapper();
    
    expect(wrapper.prop('beers')).toEqual(initialState.beers);
    expect(wrapper.dive().find(Card)).toHaveLength(initialState.beers.data.length);
  });

  it('loading as expected', () => {
    const wrapper = createWrapper();

    expect(wrapper.dive().find(BeatLoader)).toHaveLength(1);
    expect(store.getActions()).toContainEqual(BeerActions.beersRequest());
  });

  it('show empty message', () => {
    store = mockeStore({ ...initialState, beers: { data: [] } });

    const wrapper = createWrapper();
    
    expect(wrapper.dive().find('h2').text()).toBe('Empty List');
  });
});
