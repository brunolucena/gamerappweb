import Api from 'store/Api';
import { Action } from 'store/models/ReduxModels';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  LOAD_MENU_CONFIGURATION,
  LOAD_MENU_CONFIGURATION_FAILURE,
  LOAD_MENU_CONFIGURATION_SUCCESS,
} from '.';
import { LoadConfigurationRequest } from './models';

function* loadMenuConfigurationsSaga(action: Action<LoadConfigurationRequest>) {
  try {
    // @ts-ignore
    const payload = yield call(Api, action);

    yield put({ type: LOAD_MENU_CONFIGURATION_SUCCESS, payload });
  } catch (e) {
    yield put({ type: LOAD_MENU_CONFIGURATION_FAILURE, payload: e });
  }
}

export default [
  takeLatest(LOAD_MENU_CONFIGURATION, loadMenuConfigurationsSaga),
];
