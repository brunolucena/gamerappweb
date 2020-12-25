import { ActionPayload, BaseErrorResponse, BaseResponse } from 'Store/Models/ReduxModels';
import { ConfigurationModel, LoadConfigurationRequest, LoadConfigurationResponse } from './model';

export const LOAD_CONFIGURATION = 'LOAD_CONFIGURATION';
export const LOAD_CONFIGURATION_SUCCESS = 'LOAD_CONFIGURATION_SUCCESS';
export const LOAD_CONFIGURATION_FAILURE = 'LOAD_CONFIGURATION_FAILURE';

export const LOAD_MENU_CONFIGURATION = 'LOAD_MENU_CONFIGURATION';
export const LOAD_MENU_CONFIGURATION_SUCCESS = 'LOAD_MENU_CONFIGURATION_SUCCESS';
export const LOAD_MENU_CONFIGURATION_FAILURE = 'LOAD_MENU_CONFIGURATION_FAILURE';

export interface LoadConfiguration {
  type: typeof LOAD_CONFIGURATION;
  payload: ActionPayload<LoadConfigurationRequest>;
}

export interface LoadConfigurationSuccess {
  type: typeof LOAD_CONFIGURATION_SUCCESS;
  payload: BaseResponse<LoadConfigurationResponse>;
}

export interface LoadConfigurationFailure {
  type: typeof LOAD_CONFIGURATION_FAILURE;
  payload: BaseErrorResponse;
}

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

export type ConfigurationActions =
  | LoadConfiguration
  | LoadConfigurationFailure
  | LoadConfigurationSuccess
  | LoadMenuConfiguration
  | LoadMenuConfigurationFailure
  | LoadMenuConfigurationSuccess;

export interface ConfigurationState {
  error: string;
  loaded: boolean;
  loading: boolean;
  feedSessions: ConfigurationModel[];
  menuSessions: ConfigurationModel[];
}

export const initialState: ConfigurationState = {
  error: '',
  loaded: false,
  loading: false,
  feedSessions: [],
  menuSessions: [],
};

export default function reducer(state = initialState, action: ConfigurationActions): ConfigurationState {
  switch (action.type) {
    case LOAD_CONFIGURATION:
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    case LOAD_CONFIGURATION_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        feedSessions: action.payload.data.sessions,
      };
    case LOAD_CONFIGURATION_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
      };

    case LOAD_MENU_CONFIGURATION:
      return {
        ...state,
        loading: false,
        loaded: true,
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

export function loadConfiguration(): LoadConfiguration {
  return {
    type: LOAD_CONFIGURATION,
    payload: {
      request: {
        method: 'GET',
        url: '/StoreProduct/Config/v1?isFeedSession=true',
      },
    },
  };
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
