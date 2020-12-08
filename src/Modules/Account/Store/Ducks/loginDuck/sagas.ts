import Api from 'Store/Services/Api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { Login, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from '.';

function* loginSaga(action: Login) {
  try {
    const payload = yield call(Api, action, true);

    yield put({ type: LOGIN_SUCCESS, payload });
  } catch (e) {
    yield put({ type: LOGIN_FAIL, payload: e });
  }
}

export default [takeLatest(LOGIN, loginSaga)];
