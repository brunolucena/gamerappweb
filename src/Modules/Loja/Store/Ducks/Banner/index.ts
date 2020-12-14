import {
	ActionPayload,
	BaseError,
	BaseErrorResponse,
	BaseResponse,
} from 'Store/Models/ReduxModels';
import {
	BannerModel,
	LoadBannerResponse as LoadBannersResponse,
	LoadBannersRequest,
} from './model';

export const LOAD_BANNERS = 'LOAD_BANNERS';
export const LOAD_BANNERS_SUCCESS = 'LOAD_BANNERS_SUCCESS';
export const LOAD_BANNERS_FAILURE = 'LOAD_BANNERS_FAILURE';

export interface LoadBanners {
	type: typeof LOAD_BANNERS;
	payload: ActionPayload<LoadBannersRequest>;
}

export interface LoadBannersSuccess {
	type: typeof LOAD_BANNERS_SUCCESS;
	payload: BaseResponse<LoadBannersResponse>;
}

export interface LoadBannersFailure {
	type: typeof LOAD_BANNERS_FAILURE;
	payload: BaseErrorResponse;
}

export type BannerActions =
	| LoadBanners
	| LoadBannersSuccess
	| LoadBannersFailure;

export interface BannersState {
	error: string;
	loaded: boolean;
	loading: boolean;
	banners: BannerModel[];
}

export const initialState: BannersState = {
	banners: [],
	error: '',
	loaded: false,
	loading: false,
};
export default function reducer(
	state = initialState,
	action: BannerActions
): BannersState {
	switch (action.type) {
		case LOAD_BANNERS:
			return {
				...state,
				loading: false,
				loaded: false,
			};

		case LOAD_BANNERS_SUCCESS:
			return {
				...state,
				loading: false,
				loaded: true,
				banners: [...state.banners, ...action.payload.data.banners],
			};

		case LOAD_BANNERS_FAILURE:
			return {
				...state,
				loading: false,
				loaded: false,
			};

		default:
			return state;
	}
}

export function loadBanners(data: LoadBannersRequest): LoadBanners {
	return {
		type: LOAD_BANNERS,
		payload: {
			client: 'development',
			request: {
				method: 'GET',
				url: `/Banner/${data.sessionId}/v1`,
			},
		},
	};
}

// selectors

export function getBannersBySectionId(
	state: BannersState,
	sessionId: string
): BannerModel[] {
	return state.banners.filter((p) => p.sessionId === sessionId);
}
