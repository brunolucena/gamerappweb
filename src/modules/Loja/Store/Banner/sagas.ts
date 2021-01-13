import Api from 'store/Api';
import { Action } from 'store/models/ReduxModels';
import { LOAD_BANNERS, LOAD_BANNERS_FAILURE, LOAD_BANNERS_SUCCESS } from './';
import { LoadBannersRequest } from './models';
import { call, put, takeEvery } from 'redux-saga/effects';

function* loadBannersSaga(action: Action<LoadBannersRequest>) {
  try {
    // @ts-ignore
    const payload = yield call(Api, action);

    yield put({ type: LOAD_BANNERS_SUCCESS, payload });
  } catch (e) {
    yield put({ type: LOAD_BANNERS_FAILURE, payload: e });
  }
}

export default [takeEvery(LOAD_BANNERS, loadBannersSaga)];
