import { ConfigurationModel, LoadConfigurationRequest, LoadConfigurationResponse } from './models';
import { REHYDRATE } from 'redux-persist';
import {
  ActionPayload,
  BaseErrorResponse,
  BaseResponse,
  Rehydrate,
} from 'store/models/ReduxModels';
import { HYDRATE } from 'next-redux-wrapper';

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
  hydrated: boolean;
  menuSessions: ConfigurationModel[];
}

export const initialState: State = {
  error: '',
  loaded: false,
  loading: false,
  hydrated: false,
  menuSessions: [],
};

export default function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case HYDRATE: {
      if (state.hydrated) {
        return {
          ...state,
        }
      }

      return { ...state, ...action.payload.configuration, hydrated: true }
    }

    case REHYDRATE: {
      const data = action.payload;

      if (data) {
        return {
          ...state,
          ...data.configuration,
        }
      }

      return {
        ...state,
      }
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
