import {
	ActionPayload,
	BaseError,
	BaseErrorResponse,
	BaseResponse,
} from 'Store/Models/ReduxModels';
import { LoadSessionRequest, LoadSessionResponse, ProductItem } from './model';

export const LOAD_SESSION = 'LOAD_SESSION';
export const LOAD_SESSION_SUCCESS = 'LOAD_SESSION_SUCCESS';
export const LOAD_SESSION_FAILURE = 'LOAD_SESSION_FAILURE';

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

export type SessionActions =
	| LoadSession
	| LoadSessionSuccess
	| LoadSessionsFailure;

export interface SessionState {
	error: string;
	loaded: boolean;
	loading: boolean;
	items: ProductItem[];
}

export const initialState: SessionState = {
	error: '',
	items: [],
	loaded: false,
	loading: false,
};

export default function reducer(
	state = initialState,
	action: SessionActions
): SessionState {
	switch (action.type) {
		case LOAD_SESSION:
			return {
				...state,
				loading: false,
				loaded: false,
			};

		case LOAD_SESSION_SUCCESS:
			return {
				...state,
				loading: false,
				loaded: true,
				items: [...state.items, ...action.payload.data.items],
			};

		case LOAD_SESSION_FAILURE:
			return {
				...state,
				loading: false,
				loaded: false,
			};

		default:
			return state;
	}
}

export function loadSession(data: LoadSessionRequest): LoadSession {
	return {
		type: LOAD_SESSION,
		payload: {
			client: 'development',
			request: {
				method: 'GET',
				url: `/Session/${data.sessionId}/v1`,
			},
		},
	};
}

// selectors

export function getSessionItemBySessionId(
	state: SessionState,
	sessionId: string
): ProductItem[] {
	return state.items.filter((p) => p.sessionId === sessionId);
}
