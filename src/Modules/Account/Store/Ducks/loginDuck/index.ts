import { ActionPayload, BaseErrorResponse, BaseResponse } from 'Store/Models/ReduxModels';
import { LoginRequest, LoginResponse, User } from './models';

export const LOGIN = 'LOGIN';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOGOUT = 'LOGOUT';

export interface Login {
  type: typeof LOGIN;
  payload: ActionPayload<LoginRequest>;
}
export interface LoginFail {
  type: typeof LOGIN_FAIL;
  payload: BaseErrorResponse;
}
export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: BaseResponse<LoginResponse>;
}

export interface Logout {
  type: typeof LOGOUT;
}

export type Actions = Login | LoginFail | LoginSuccess | Logout;

export interface State {
  error: string;
  loading: boolean;
  user: User;
  token: string;
}

const initialState: State = {
  error: '',
  loading: false,
  user: {
    firstName: '',
    fullName: '',
    lastName: '',
  },
  token: '',
};

export default function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Verifique seu usuário e senha e tente novamente',
      };
    case LOGIN_SUCCESS: {
      const { token, user } = action.payload.data;

      return {
        ...state,
        error: '',
        loading: false,
        token,
        user: { ...state.user, ...user },
      };
    }

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
}

// Actions
export function login(email: string, password: string): Login {
  return {
    type: LOGIN,
    payload: {
      request: {
        method: 'POST',
        url: '/Auth/Login/v1',
        data: {
          email,
          password,
        },
      },
    },
  };
}

export function logout(): Logout {
  return {
    type: LOGOUT,
  };
}

// Selectors
export function selectIsUserLoggedIn(state: State): boolean {
  return !!state.token;
}
