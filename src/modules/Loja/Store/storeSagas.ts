import bannerSagas from './Banner/sagas';
import searchSagas from './Search/sagas';
import sessionSagas from './Session/sagas';

const storeSagas = [
  ...bannerSagas,
  ...searchSagas,
  ...sessionSagas,
];

export default storeSagas;
