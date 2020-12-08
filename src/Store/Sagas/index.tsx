import { all } from 'redux-saga/effects';
import AccountSagas from 'Modules/Account/Store/Sagas';

const mySaga = function* rootSaga() {
  yield all([...AccountSagas]);
};

export default mySaga;
