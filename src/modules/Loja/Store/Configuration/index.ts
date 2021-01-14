import { ConfigurationModel, LoadConfigurationRequest, LoadConfigurationResponse } from './models';
import { HYDRATE } from 'next-redux-wrapper';
import { REHYDRATE } from 'redux-persist';
import {
  ActionPayload,
  BaseErrorResponse,
  BaseResponse,
  Hydrate,
  Rehydrate,
} from 'store/models/ReduxModels';

export const LOAD_MENU_CONFIGURATION = 'LOAD_MENU_CONFIGURATION';
export const LOAD_MENU_CONFIGURATION_SUCCESS = 'LOAD_MENU_CONFIGURATION_SUCCESS';
export const LOAD_MENU_CONFIGURATION_FAILURE = 'LOAD_MENU_CONFIGURATION_FAILURE';

export interface LoadMenuConfiguration {
  type: typeof LOAD_MENU_CONFIGURATION;
  payload: ActionPayload<LoadConfigurationRequest>;
}

export interface LoadMenuConfigurationSuccess {
  type: typeof LOAD_MENU_CONFIGURATION_SUCCESS;
  payload: BaseResponse<LoadConfigurationResponse>;
}

export interface LoadMenuConfigurationFailure {
  type: typeof LOAD_MENU_CONFIGURATION_FAILURE;
  payload: BaseErrorResponse;
}

export type Actions =
  | Hydrate
  | Rehydrate
  | LoadMenuConfiguration
  | LoadMenuConfigurationFailure
  | LoadMenuConfigurationSuccess;

export interface State {
  error: string;
  loaded: boolean;
  loading: boolean;
  menuSessions: ConfigurationModel[];
}

export const initialState: State = {
  error: '',
  loaded: false,
  loading: false,
  menuSessions: [],
};

export default function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case HYDRATE: {
      const hasData = action.payload.configuration.menuSessions.length > 0;

      return {
        ...state,
        ...(hasData && action.payload.configuration),
      };
    }
    case REHYDRATE: {
      const isEmpty = state.menuSessions.length === 0;

      return {
        ...state,
        ...(isEmpty && (action.payload.configuration)),
      };
    }

    case LOAD_MENU_CONFIGURATION:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case LOAD_MENU_CONFIGURATION_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        menuSessions: action.payload.data.sessions,
      };
    case LOAD_MENU_CONFIGURATION_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
      };

    default:
      return state;
  }
}

export function loadMenuConfiguration(): LoadMenuConfiguration {
  return {
    type: LOAD_MENU_CONFIGURATION,
    payload: {
      request: {
        method: 'GET',
        url: '/StoreProduct/Config/v1?isMenuSession=true',
      },
    },
  };
}
