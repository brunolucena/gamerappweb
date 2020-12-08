import config, { State as ConfigState } from './Ducks/configDuck';
import login, { State as LoginState } from 'Modules/Account/Store/Ducks/loginDuck';

export interface ReduxStore {
  config: ConfigState;
  login: LoginState;
}

const reducers: any = {
  config,
  login,
};

export default reducers;
