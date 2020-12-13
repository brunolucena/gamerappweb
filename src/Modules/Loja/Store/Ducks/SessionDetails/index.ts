import {
	ActionPayload,
	BaseError,
	BaseErrorResponse,
	BaseResponse,
} from 'Store/Models/ReduxModels';
import { ProductItem } from '../Session/model';
import { LoadSessionDetailsRequest, LoadSessionDetailsResponse } from './model';

export const LOAD_SESSION_DETAILS = 'LOAD_SESSION_DETAILS';
export const LOAD_SESSION_DETAILS_SUCCESS = 'LOAD_SESSION_DETAILS_SUCCESS';
export const LOAD_SESSION_DETAILS_FAILURE = 'LOAD_SESSION_DETAILS_FAILURE';

export interface LoadSessionDetails {
	type: typeof LOAD_SESSION_DETAILS;
	payload: ActionPayload<LoadSessionDetailsRequest>;
}

export interface LoadSessionDetailsSuccess {
	type: typeof LOAD_SESSION_DETAILS_SUCCESS;
	payload: BaseResponse<LoadSessionDetailsResponse>;
}

export interface LoadSessionDetailsFailure {
	type: typeof LOAD_SESSION_DETAILS_FAILURE;
	payload: BaseErrorResponse;
}

export type SessionActions =
	| LoadSessionDetails
	| LoadSessionDetailsSuccess
	| LoadSessionDetailsFailure;

export interface SessionDetailsState {
	error: string;
	loaded: boolean;
	loading: boolean;
	items: ProductItem[];
	count: number;
	name: string;
}

export const initialState: SessionDetailsState = {
	error: '',
	items: [],
	loaded: false,
	loading: false,
	count: 0,
	name: '',
};

export default function reducer(
	state = initialState,
	action: SessionActions
): SessionDetailsState {
	switch (action.type) {
		case LOAD_SESSION_DETAILS:
			return {
				...state,
				loading: false,
			};

		case LOAD_SESSION_DETAILS_SUCCESS:
			return {
				...state,
				loading: false,
				items: [...state.items, ...action.payload.data.sessions],
				count: action.payload.data.count,
				name: action.payload.data.name,
			};

		case LOAD_SESSION_DETAILS_FAILURE:
			return {
				...state,
				loading: false,
			};

		default:
			return state;
	}
}

export function loadSessionDetails(
	data: LoadSessionDetailsRequest
): LoadSessionDetails {
	return {
		type: LOAD_SESSION_DETAILS,
		payload: {
			request: {
				method: 'GET',
				url: `/Session/${data.sessionId}/v1?page=${data.page}&quantity=${data.quantity}`,
			},
		},
	};
}
