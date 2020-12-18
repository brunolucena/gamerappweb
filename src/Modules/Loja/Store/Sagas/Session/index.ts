import { call, put, takeLatest } from 'redux-saga/effects';
import { Action } from 'Store/Models/ReduxModels';
import Api from 'Store/Services/Api';
import {
	LOAD_SESSION,
	LOAD_SESSION_FAILURE,
	LOAD_SESSION_SUCCESS,
} from '../../Ducks/Session';
import { LoadSessionRequest } from '../../Ducks/Session/model';

function* loadSessionSaga(action: Action<LoadSessionRequest>) {
	try {
		const payload = yield call(Api, action);

		yield put({ type: LOAD_SESSION_SUCCESS, payload });
	} catch (e) {
		yield put({ type: LOAD_SESSION_FAILURE, payload: e });
	}
}

export default [takeLatest(LOAD_SESSION, loadSessionSaga)];
