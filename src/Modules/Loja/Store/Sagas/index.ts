import configurationSaga from '../Sagas/Configuration';
import bannerSaga from '../Sagas/Banner';
import productDetailsSaga from '../Sagas/ProductDetails';
import sessionSaga from '../Sagas/Session';
import sessionDetailsSaga from '../Sagas/SessionDetails';
import searchSaga from '../Sagas/Search';

const StoreSagas = [
	configurationSaga,
	bannerSaga,
	productDetailsSaga,
	sessionSaga,
	sessionDetailsSaga,
	searchSaga,
];

export default StoreSagas;
