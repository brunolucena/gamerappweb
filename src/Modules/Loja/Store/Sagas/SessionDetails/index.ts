import { call, put, takeLatest } from 'redux-saga/effects';
import { Action } from 'Store/Models/ReduxModels';
import Api from 'Store/Services/Api';
import {
	LOAD_SESSION_DETAILS,
	LOAD_SESSION_DETAILS_FAILURE,
	LOAD_SESSION_DETAILS_SUCCESS,
} from '../../Ducks/SessionDetails';
import { LoadSessionDetailsRequest } from '../../Ducks/SessionDetails/model';

function* loadSessionDetailsSaga(action: Action<LoadSessionDetailsRequest>) {
	try {
		const payload = yield call(Api, action);

		yield put({ type: LOAD_SESSION_DETAILS_SUCCESS, payload });
	} catch (e) {
		yield put({ type: LOAD_SESSION_DETAILS_FAILURE, payload: e });
	}
}

export default [takeLatest(LOAD_SESSION_DETAILS, loadSessionDetailsSaga)];
