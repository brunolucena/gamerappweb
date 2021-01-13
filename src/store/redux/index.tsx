// import login, { State as LoginState } from 'modules/Account/Store/Login';
// import storeBanners, { BannersState } from 'modules/Loja/Store/Banner';
// import storeProductDetails, { ProductDetailsState } from 'modules/Loja/Store/ProductDetails';
// import storeSearch, { SearchState } from 'modules/Loja/Store/Search';
// import storeSessionDetails, { SessionDetailsState } from 'modules/Loja/Store/SessionDetails';
import configuration, { State as ConfigurationState } from 'modules/Loja/Store/Configuration';
import session, { State as SessionState } from 'modules/Loja/Store/Session';

export interface ReduxStore {
  // config: ConfigState;
  // login: LoginState;
  // storeBanners: BannersState;
  // storeProductDetails: ProductDetailsState;
  // storeSearch: SearchState;
  // storeSession: SessionState;
  // storeSessionDetails: SessionDetailsState;
  session: SessionState,
  configuration: ConfigurationState;
}

const reducers: any = {
  // config,
  // login,
  // storeBanners,
  // storeProductDetails,
  // storeSearch,
  // storeSessionDetails,
  configuration,
  session,
};

export default reducers;
