import Api from 'store/Api';
import { Action } from 'store/models/ReduxModels';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  LOAD_CONFIGURATION,
  LOAD_CONFIGURATION_FAILURE,
  LOAD_CONFIGURATION_SUCCESS,
  LOAD_MENU_CONFIGURATION,
  LOAD_MENU_CONFIGURATION_FAILURE,
  LOAD_MENU_CONFIGURATION_SUCCESS,
} from '.';
import { LoadConfigurationRequest } from './model';

function* loadConfigurationsSaga(action: Action<LoadConfigurationRequest>) {
  try {
    // @ts-ignore
    const payload = yield call(Api, action);

    yield put({ type: LOAD_CONFIGURATION_SUCCESS, payload });
  } catch (e) {
    yield put({ type: LOAD_CONFIGURATION_FAILURE, payload: e });
  }
}

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
  takeLatest(LOAD_CONFIGURATION, loadConfigurationsSaga),
  takeLatest(LOAD_MENU_CONFIGURATION, loadMenuConfigurationsSaga),
];
