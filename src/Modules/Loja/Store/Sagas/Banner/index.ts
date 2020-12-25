import { call, put, takeEvery } from 'redux-saga/effects';
import { Action } from 'Store/Models/ReduxModels';
import Api from 'Store/Services/Api';
import { LOAD_BANNERS, LOAD_BANNERS_FAILURE, LOAD_BANNERS_SUCCESS } from '../../Ducks/Banner';
import { LoadBannersRequest } from '../../Ducks/Banner/model';

function* loadBannersSaga(action: Action<LoadBannersRequest>) {
  try {
    const payload = yield call(Api, action);

    yield put({ type: LOAD_BANNERS_SUCCESS, payload });
  } catch (e) {
    yield put({ type: LOAD_BANNERS_FAILURE, payload: e });
  }
}

export default [takeEvery(LOAD_BANNERS, loadBannersSaga)];
