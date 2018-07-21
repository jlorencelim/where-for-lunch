import React from 'react';
import Condition from 'client/components/Condition/Condition';
import renderer from 'react-test-renderer';

test('With Jest snapshot, Condition component renders default state', () => {
  const condition = {
    radius: 500,
    longitude: null,
    latitude: null,
    price: [],
  };
  const conditionComponent = renderer
    .create(<Condition condition={condition} />)
    .toJSON();

  expect(conditionComponent).toMatchSnapshot();
});

test('With Jest snapshot, Condition component renders with condition values', () => {
  const condition = {
    radius: 1000,
    longitude: 1.00,
    latitude: 1.00,
    price: [1, 2, 3, 4],
  };
  const conditionComponent = renderer
    .create(<Condition condition={condition} />)
    .toJSON();

  expect(conditionComponent).toMatchSnapshot();
});
