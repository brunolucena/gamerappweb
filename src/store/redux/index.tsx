// import login, { State as LoginState } from 'modules/Account/Store/Login';
// import storeProductDetails, { ProductDetailsState } from 'modules/Loja/Store/ProductDetails';
// import storeSearch, { SearchState } from 'modules/Loja/Store/Search';
// import storeSessionDetails, { SessionDetailsState } from 'modules/Loja/Store/SessionDetails';
import banner, { State as BannersState } from 'modules/Loja/Store/Banner';
import configuration, { State as ConfigurationState } from 'modules/Loja/Store/Configuration';
import search, { State as SearchState } from 'modules/Loja/Store/Search';
import session, { State as SessionState } from 'modules/Loja/Store/Session';

export interface ReduxStore {
  // config: ConfigState;
  // login: LoginState;
  // storeProductDetails: ProductDetailsState;
  // storeSearch: SearchState;
  // storeSession: SessionState;
  // storeSessionDetails: SessionDetailsState;
  banner: BannersState;
  configuration: ConfigurationState;
  search: SearchState;
  session: SessionState,
}

const reducers: any = {
  // config,
  // login,
  // storeProductDetails,
  // storeSearch,
  // storeSessionDetails,
  banner,
  configuration,
  search,
  session,
};

export default reducers;
