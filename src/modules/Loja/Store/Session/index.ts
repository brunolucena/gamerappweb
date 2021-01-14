import { ActionPayload, BaseErrorResponse, BaseResponse, Hydrate } from 'store/models/ReduxModels';
import { LoadSessionRequest, LoadSessionResponse, ProductItem } from './models';
import { HYDRATE } from 'next-redux-wrapper';

export const LOAD_SESSION = 'LOAD_SESSION';
export const LOAD_SESSION_SUCCESS = 'LOAD_SESSION_SUCCESS';
export const LOAD_SESSION_FAILURE = 'LOAD_SESSION_FAILURE';
export const LOAD_SESSION_CLEAR = 'LOAD_SESSION_CLEAR';

export interface LoadSession {
  type: typeof LOAD_SESSION;
  payload: ActionPayload<LoadSessionRequest>;
}

export interface LoadSessionSuccess {
  type: typeof LOAD_SESSION_SUCCESS;
  payload: BaseResponse<LoadSessionResponse>;
}

export interface LoadSessionsFailure {
  type: typeof LOAD_SESSION_FAILURE;
  payload: BaseErrorResponse;
}

export interface LoadSessionsClear {
  type: typeof LOAD_SESSION_CLEAR;
  payload: [];
}

export type Actions = Hydrate | LoadSession | LoadSessionSuccess | LoadSessionsFailure | LoadSessionsClear;

export interface State {
  error: string;
  loaded: boolean;
  loading: boolean;
  items: ProductItem[];
  name: string;
  count: number;
}

export const initialState: State = {
  error: '',
  items: [],
  name: '',
  loaded: false,
  loading: false,
  count: 0,
};

export default function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload.session };
    }

    case LOAD_SESSION:
      return {
        ...state,
        loading: false,
        loaded: false,
        name: '',
        count: 0,
      };

    case LOAD_SESSION_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        items: [...state.items, ...action.payload.data.items],
        name: action.payload.data.name,
        count: action.payload.data.count,
      };

    case LOAD_SESSION_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: true,
        name: '',
        count: 0,
      };

    case LOAD_SESSION_CLEAR:
      return {
        ...state,
        loading: false,
        loaded: false,
        items: [],
        name: '',
        count: 0,
      };

    default:
      return state;
  }
}

export function loadSession(data: LoadSessionRequest): LoadSession {
  return {
    type: LOAD_SESSION,
    payload: {
      request: {
        method: 'GET',
        url: `/Session/${data.sessionId}/v1?quantity=${data.quantity ?? 20}`,
      },
    },
  };
}

export function loadSessionClear() {
  return {
    type: LOAD_SESSION_CLEAR,
  };
}

// selectors

export function getSessionItemBySessionId(state: State, sessionId: string): ProductItem[] {
  return state.items.filter((p) => p.sessionId === sessionId);
}
