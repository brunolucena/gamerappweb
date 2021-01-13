import bannerSagas from './Banner/sagas';
import configurationSagas from './Configuration/sagas';
import sessionSagas from './Session/sagas';

const storeSagas = [
  ...bannerSagas,
  ...configurationSagas,
  ...sessionSagas,
];

export default storeSagas;
