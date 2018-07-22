import React from 'react';
import { createMockStore } from 'redux-test-utils';
import PlaceDetailPage from 'client/containers/PlaceDetailPage';
import { shallowWithStore } from '../../utils';

test('With Jest snapshot, PlaceDetailPage container renders successfully', () => {
  const state = {
    place: {
      id: 1,
      photos: ['photo.png'],
      rating: 3.5,
    },
  };

  const store = createMockStore(state);
  const wrapper = shallowWithStore(<PlaceDetailPage />, store);

  expect(wrapper).toMatchSnapshot();
});
