import configuration, { ConfigurationState } from 'modules/Loja/Store/Configuration';
// import config, { State as ConfigState } from './Ducks/configDuck';
// import login, { State as LoginState } from 'Modules/Account/Store/Ducks/loginDuck';
// import storeBanners, { BannersState } from 'Modules/Loja/Store/Ducks/Banner';
// import storeProductDetails, { ProductDetailsState } from 'Modules/Loja/Store/Ducks/ProductDetails';
// import storeSearch, { SearchState } from 'Modules/Loja/Store/Ducks/Search';
// import storeSession, { SessionState } from 'Modules/Loja/Store/Ducks/Session';
// import storeSessionDetails, { SessionDetailsState } from 'Modules/Loja/Store/Ducks/SessionDetails';

export interface ReduxStore {
  // config: ConfigState;
  // login: LoginState;
  // storeBanners: BannersState;
  configuration: ConfigurationState;
  // storeProductDetails: ProductDetailsState;
  // storeSearch: SearchState;
  // storeSession: SessionState;
  // storeSessionDetails: SessionDetailsState;
}

const reducers: any = {
  // config,
  // login,
  // storeBanners,
  configuration,
  // storeProductDetails,
  // storeSearch,
  // storeSession,
  // storeSessionDetails,
};

export default reducers;
