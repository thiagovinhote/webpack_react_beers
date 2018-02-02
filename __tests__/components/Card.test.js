import React from 'react';
import { shallow } from 'enzyme';

import { Link } from 'react-router-dom';
import Card from 'components/Card';

const beer = {
	id: 1,
	name: 'Beer 1',
	description: 'Beer 1 description',
	image_url: 'image_url',
	tagline: 'Tag Line',
}

describe('Testing as expected', () => {
	
	it('renders as expected', () => {
		const wrapper = shallow(
			<Card beer={beer} />
		);

		expect(wrapper.find(Link)).toHaveLength(1);
		expect(wrapper.find('h3').text()).toBe(beer.name);
		expect(wrapper.find('span')).toHaveLength(1)
		
		expect(wrapper.find('img')).toHaveLength(0);
		expect(wrapper.find('p')).toHaveLength(0);
	});

	it('render with props complet', () => {
		const wrapper = shallow(
			<Card beer={beer} complet={true} />
		);

		expect(wrapper.find(Link)).toHaveLength(0);
		expect(wrapper.find('h3').text()).toBe(beer.name);
		expect(wrapper.find('span').text()).toBe(beer.tagline);
	
		expect(wrapper.find('img')).toHaveLength(1);
		expect(wrapper.find('p').text()).toBe(beer.description);
	});
});
