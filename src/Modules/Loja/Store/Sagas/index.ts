import configurationSaga from '../Ducks/Configuration/sagas';
import bannerSaga from '../Sagas/Banner';
import productDetailsSaga from '../Sagas/ProductDetails';
import sessionSaga from '../Sagas/Session';
import sessionDetailsSaga from '../Sagas/SessionDetails';
import searchSaga from '../Sagas/Search';

const StoreSagas = [
  ...bannerSaga,
  ...configurationSaga,
  ...productDetailsSaga,
  ...searchSaga,
  ...sessionDetailsSaga,
  ...sessionSaga,
];

export default StoreSagas;
