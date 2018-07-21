import reducer from 'client/reducers/conditionReducer';
import * as actionTypes from 'client/actions/conditionActionTypes';


const INITIAL_STATE = {
  radius: 500,
  longitude: null,
  latitude: null,
  price: [],
};

test('Condition Reducer, Return initial state', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

test('Condition Reducer, Set radius', () => {
  const radius = 1000;
  const payload = {
    type: actionTypes.SET_RADIUS,
    payload: radius,
  };
  const state = {
    radius,
    longitude: null,
    latitude: null,
    price: [],
  };

  expect(reducer(INITIAL_STATE, payload)).toEqual(state);
});

test('Condition Reducer, Set longitude and latitude', () => {
  const longitude = 1.00;
  const latitude = 1.00;
  const payload = {
    type: actionTypes.SET_LAT_LNG,
    payload: {
      longitude,
      latitude,
    },
  };
  const state = {
    longitude,
    latitude,
    radius: 500,
    price: [],
  };

  expect(reducer(INITIAL_STATE, payload)).toEqual(state);
});

test('Condition Reducer, Set price filter', () => {
  const price = [1, 2, 3, 4];
  const payload = {
    type: actionTypes.SET_PRICE,
    payload: price,
  };
  const state = {
    price,
    radius: 500,
    longitude: null,
    latitude: null,
  };

  expect(reducer(INITIAL_STATE, payload)).toEqual(state);
});
