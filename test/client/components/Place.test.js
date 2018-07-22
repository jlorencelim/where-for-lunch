import React from 'react';
import { shallow } from 'enzyme';
import Place from 'client/components/Place/Place';
import renderer from 'react-test-renderer';

test('With Enzyme, Place component not render rating section when no rating passed over', () => {
  const place = { hehe: 'haha' };
  const wrapper = shallow(
    <Place place={place} />,
  );
  const p = wrapper.find('.rating');
  expect(p.length).toBe(0);
});

test('With Jest snapshot, Place component renders rating section when present', () => {
  const place = { hehe: 'haha', rating: 3.5 };
  const placeComponent = renderer
    .create(<Place place={place} />)
    .toJSON();
  expect(placeComponent).toMatchSnapshot();
});

test('With Enzyme, Place component not renders carousel when place has no photos', () => {
  const place = { hehe: 'haha', photos: [] };
  const wrapper = shallow(
    <Place place={place} detailedData />,
  );
  const p = wrapper.find('.carousel');
  expect(p.length).toBe(0);
});

test('With Enzyme, Place component renders carousel when place has photos', () => {
  const place = { hehe: 'haha', photos: ['photo.png'] };
  const wrapper = shallow(
    <Place place={place} detailedData />,
  );
  const p = wrapper.find('.carousel');
  expect(p.length).toBe(1);
});

test('With Enzyme, Place component renders detail link when not detailed', () => {
  const place = { hehe: 'haha', id: 1 };
  const wrapper = shallow(
    <Place place={place} detailedData={false} />,
  );
  const p = wrapper.find('.link');
  expect(p.length).toBe(1);
});

test('With Enzyme, Place component not renders link when datailed', () => {
  const place = { hehe: 'haha', id: 1 };
  const wrapper = shallow(
    <Place place={place} detailedData />,
  );
  const p = wrapper.find('.link');
  expect(p.length).toBe(0);
});
