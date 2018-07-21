import React from 'react';
import { createMockStore } from 'redux-test-utils';
import HomePage from 'client/containers/HomePage';
import { shallowWithStore, mountWithStore } from '../../utils';

test('With Jest snapshot, Homepage container renders with a clickable button', () => {
  const state = {
    condition: {
      radius: 500,
      longitude: 1.00,
      latitude: 1.00,
      price: [],
    },
  };

  const store = createMockStore(state);
  const wrapper = shallowWithStore(<HomePage />, store);

  expect(wrapper).toMatchSnapshot();
});

test('With Jest snapshot, Homepage container contains null longitude and latitude values', () => {
  const state = {
    condition: {
      radius: 500,
      longitude: null,
      latitude: null,
      price: [],
    },
    place: {},
  };

  const store = createMockStore(state);
  const wrapper = mountWithStore(<HomePage />, store);
  const button = wrapper.find('button');

  expect(button.props()).toHaveProperty('disabled');
});
