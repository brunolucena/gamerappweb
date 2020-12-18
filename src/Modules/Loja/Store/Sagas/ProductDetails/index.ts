import { call, put, takeLatest } from 'redux-saga/effects';
import { Action } from 'Store/Models/ReduxModels';
import Api from 'Store/Services/Api';
import {
	LOAD_PRODUCT_DETAILS,
	LOAD_PRODUCT_DETAILS_FAILURE,
	LOAD_PRODUCT_DETAILS_SUCCESS,
} from '../../Ducks/ProductDetails';
import { LoadProductDetailsRequest } from '../../Ducks/ProductDetails/model';

function* loadProductDetailsSaga(action: Action<LoadProductDetailsRequest>) {
	try {
		const payload = yield call(Api, action);

		yield put({ type: LOAD_PRODUCT_DETAILS_SUCCESS, payload });
	} catch (e) {
		yield put({ type: LOAD_PRODUCT_DETAILS_FAILURE, payload: e });
	}
}

export default [takeLatest(LOAD_PRODUCT_DETAILS, loadProductDetailsSaga)];
