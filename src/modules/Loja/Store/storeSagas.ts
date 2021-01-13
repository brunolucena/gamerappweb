import configurationSagas from './Configuration/sagas';
import sessionSagas from './Session/sagas';

const storeSagas = [
  ...configurationSagas,
  ...sessionSagas,
];

export default storeSagas;
