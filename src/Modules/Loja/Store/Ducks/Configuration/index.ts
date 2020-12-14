import { ActionPayload, BaseErrorResponse, BaseResponse } from 'Store/Models/ReduxModels';
import { ConfigurationModel, LoadConfigurationRequest, LoadConfigurationResponse } from './model';

export const LOAD_CONFIGURATION = 'LOAD_CONFIGURATION';
export const LOAD_CONFIGURATION_SUCCESS = 'LOAD_CONFIGURATION_SUCCESS';
export const LOAD_CONFIGURATION_FAILURE = 'LOAD_CONFIGURATION_FAILURE';

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

export type ConfigurationActions = LoadConfiguration | LoadConfigurationSuccess | LoadConfigurationFailure;

export interface ConfigurationState {
  error: string;
  loaded: boolean;
  loading: boolean;
  sessions: ConfigurationModel[];
}

export const initialState: ConfigurationState = {
  error: '',
  loaded: false,
  loading: false,
  sessions: [],
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
        sessions: action.payload.data.sessions,
      };

    case LOAD_CONFIGURATION_FAILURE:
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
      client: 'development',
      request: {
        method: 'GET',
        url: '/StoreProduct/Config/v1',
      },
    },
  };
}
