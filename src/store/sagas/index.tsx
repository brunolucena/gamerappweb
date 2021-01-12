import storeSagas from 'modules/Loja/Store/storeSagas';
import { all } from 'redux-saga/effects';
// import AccountSagas from 'Modules/Account/Store/Sagas';

const mySaga = function* rootSaga() {
  // yield all([...AccountSagas, ...storeSagas]);
  yield all([...storeSagas]);
};

export default mySaga;
