import config, { State as ConfigState } from './Ducks/configDuck';
import login, { State as LoginState } from 'Modules/Account/Store/Ducks/loginDuck';
import storeBanners, { BannersState } from 'Modules/Loja/Store/Ducks/Banner';
import storeConfiguration, { ConfigurationState } from 'Modules/Loja/Store/Ducks/Configuration';
import storeProductDetails, { ProductDetailsState } from 'Modules/Loja/Store/Ducks/ProductDetails';
import storeSearch, { SearchState } from 'Modules/Loja/Store/Ducks/Search';
import storeSession, { SessionState } from 'Modules/Loja/Store/Ducks/Session';
import storeSessionDetails, { SessionDetailsState } from 'Modules/Loja/Store/Ducks/SessionDetails';

export interface ReduxStore {
  config: ConfigState;
  login: LoginState;
  storeBanners: BannersState;
  storeConfiguration: ConfigurationState;
  storeProductDetails: ProductDetailsState;
  storeSearch: SearchState;
  storeSession: SessionState;
  storeSessionDetails: SessionDetailsState;
}

const reducers: any = {
  config,
  login,
  storeBanners,
  storeConfiguration,
  storeProductDetails,
  storeSearch,
  storeSession,
  storeSessionDetails,
};

export default reducers;
