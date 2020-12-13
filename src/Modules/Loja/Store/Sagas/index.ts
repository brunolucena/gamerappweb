import configurationSaga from '../Sagas/Configuration';
import bannerSaga from '../Sagas/Banner';
import productDetailsSaga from '../Sagas/ProductDetails';
import sessionSaga from '../Sagas/Session';
import sessionDetailsSaga from '../Sagas/SessionDetails';

const StoreSagas = [
	configurationSaga,
	bannerSaga,
	productDetailsSaga,
	sessionSaga,
	sessionDetailsSaga,
];

export default StoreSagas;
