// import login, { State as LoginState } from 'modules/Account/Store/Login';
// import storeProductDetails, { ProductDetailsState } from 'modules/Loja/Store/ProductDetails';
// import storeSearch, { SearchState } from 'modules/Loja/Store/Search';
// import storeSessionDetails, { SessionDetailsState } from 'modules/Loja/Store/SessionDetails';
import banner, { State as BannersState } from 'modules/Loja/Store/Banner';
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
  search,
  session,
};

export default reducers;
