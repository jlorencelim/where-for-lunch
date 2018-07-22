import { call, takeEvery, put } from 'redux-saga/effects';
import {
  getPlaceIds,
  getPlaceDetails,
} from 'services/placeApi';
import { getRandom } from 'lib/utils';
import placeActions from 'actions/placeActions';
import {
  FETCH_PLACES,
  FETCH_PLACE_DETAIL,
} from 'actions/placeActionTypes';

function* fetchPlace(action) {
  try {
    const data = { ...action.payload };
    data.price = data.price.join(',');

    const places = yield call(getPlaceIds, data);
    const randomPlace = getRandom(places);
    yield put(placeActions.setDetails(randomPlace));
  } catch (e) {
    console.log('error! ', e);
  }
}

function* fetchPlaceDetail(action) {
  try {
    const place = yield call(getPlaceDetails, action.payload);
    yield put(placeActions.setDetails(place));
  } catch (e) {
    console.log('error! ', e);
  }
}

function* placeSagas() {
  yield takeEvery(FETCH_PLACES, fetchPlace);
  yield takeEvery(FETCH_PLACE_DETAIL, fetchPlaceDetail);
}

export default placeSagas;
