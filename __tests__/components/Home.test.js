import React from 'react';
import { shallow } from 'enzyme';

import Button from 'components/Button';

const beers = [
  {
    id: 1, name: 'Teste 1', description: 'Zero', image_url: '',
  },
  {
    id: 2, name: 'Teste 2', description: 'Zero', image_url: '',
  },
  {
    id: 3, name: 'Teste 3', description: 'Zero', image_url: '',
  },
];

describe('Teste Home List', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<Button title="a" onClick={() => {}} />);
    expect(wrapper.children()).toHaveLength(1);
  });
});
