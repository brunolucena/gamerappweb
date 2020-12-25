import { call, put, takeLatest } from 'redux-saga/effects';
import { Action } from 'Store/Models/ReduxModels';
import Api from 'Store/Services/Api';
import { SEARCH, SEARCH_FAILURE, SEARCH_SUCCESS } from '../../Ducks/Search';
import { SearchRequest } from '../../Ducks/Search/model';

function* searchSaga(action: Action<SearchRequest>) {
  try {
    const payload = yield call(Api, action);

    yield put({ type: SEARCH_SUCCESS, payload });
  } catch (e) {
    yield put({ type: SEARCH_FAILURE, payload: e });
  }
}

export default [takeLatest(SEARCH, searchSaga)];
