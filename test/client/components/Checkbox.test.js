import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from 'client/components/Checkbox/Checkbox';

test('With Jest snapshot, Button component renders with label and value', () => {
  const checkboxComponent = renderer
    .create(<Checkbox label="$" value={1} />)
    .toJSON();

  expect(checkboxComponent).toMatchSnapshot();
});
