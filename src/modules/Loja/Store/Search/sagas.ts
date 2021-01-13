import Api from 'store/Api';
import { Action } from 'store/models/ReduxModels';
import { call, put, takeLatest } from 'redux-saga/effects';
import { SEARCH, SEARCH_FAILURE, SEARCH_SUCCESS } from './';
import { SearchRequest } from './models';

function* searchSaga(action: Action<SearchRequest>) {
  try {
    // @ts-ignore
    const payload = yield call(Api, action);

    yield put({ type: SEARCH_SUCCESS, payload });
  } catch (e) {
    yield put({ type: SEARCH_FAILURE, payload: e });
  }
}

export default [takeLatest(SEARCH, searchSaga)];
