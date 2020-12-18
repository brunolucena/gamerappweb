import { all } from 'redux-saga/effects';
import AccountSagas from 'Modules/Account/Store/Sagas';
import StoreSagas from 'Modules/Loja/Store/Sagas';

const mySaga = function* rootSaga() {
  yield all([...AccountSagas, ...StoreSagas]);
};

export default mySaga;
