import bannerSagas from './Banner/sagas';
import configurationSagas from './Configuration/sagas';
import searchSagas from './Search/sagas';
import sessionSagas from './Session/sagas';

const storeSagas = [
  ...bannerSagas,
  ...configurationSagas,
  ...searchSagas,
  ...sessionSagas,
];

export default storeSagas;
