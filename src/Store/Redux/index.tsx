import login, {
	State as LoginState,
} from 'Modules/Account/Store/Ducks/loginDuck';
import banners, { BannersState } from 'Modules/Loja/Store/Ducks/Banner';
import configuration, {
	ConfigurationState,
} from 'Modules/Loja/Store/Ducks/Configuration';
import productDetails, {
	ProductDetailsState,
} from 'Modules/Loja/Store/Ducks/ProductDetails';
import storeSearch, { SearchState } from 'Modules/Loja/Store/Ducks/Search';
import session, { SessionState } from 'Modules/Loja/Store/Ducks/Session';
import sessionDetails, {
	SessionDetailsState,
} from 'Modules/Loja/Store/Ducks/SessionDetails';
import config, { State as ConfigState } from './Ducks/configDuck';

export interface ReduxStore {
	config: ConfigState;
	login: LoginState;
	storeConfiguration: ConfigurationState;
	storeSessionDetails: SessionDetailsState;
	storeProductDetails: ProductDetailsState;
	storeBanners: BannersState;
	storeSession: SessionState;
	storeSearch: SearchState;
}

const reducers: any = {
	config,
	login,
	configuration,
	sessionDetails,
	productDetails,
	banners,
	session,
	storeSearch
};

export default reducers;
