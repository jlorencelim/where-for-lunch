import React from 'react';
import renderer from 'react-test-renderer';
import Button from 'client/components/Button/Button';

test('With Jest snapshot, Button component renders as disabled', () => {
  const buttonComponent = renderer
    .create(<Button theme="homepageClick" disabled />)
    .toJSON();

  expect(buttonComponent).toMatchSnapshot();
});

test('With Jest snapshot, Button component renders as enabled', () => {
  const buttonComponent = renderer
    .create(<Button theme="homepageClick" disabled={false} />)
    .toJSON();

  expect(buttonComponent).toMatchSnapshot();
});
