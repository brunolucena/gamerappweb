import Api from 'store/Api';
import { call, put, takeEvery } from 'redux-saga/effects';
import { Action } from 'store/models/ReduxModels';
import {
  LOAD_SESSION,
  LOAD_SESSION_FAILURE,
  LOAD_SESSION_SUCCESS,
} from './';
import { LoadSessionRequest } from './models';

function* loadSessionSaga(action: Action<LoadSessionRequest>) {
  try {
    // @ts-ignore
    const payload = yield call(Api, action);

    yield put({ type: LOAD_SESSION_SUCCESS, payload });
  } catch (e) {
    yield put({ type: LOAD_SESSION_FAILURE, payload: e });
  }
}

export default [takeEvery(LOAD_SESSION, loadSessionSaga)];
