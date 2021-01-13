import {
  ActionPayload,
  BaseErrorResponse,
  BaseResponse,
  Hydrate,
} from 'store/models/ReduxModels';
import { BannerModel, LoadBannersRequest, LoadBannerResponse as LoadBannersResponse } from './models';
import { HYDRATE } from 'next-redux-wrapper';

export const LOAD_BANNERS = 'LOAD_BANNERS';
export const LOAD_BANNERS_SUCCESS = 'LOAD_BANNERS_SUCCESS';
export const LOAD_BANNERS_FAILURE = 'LOAD_BANNERS_FAILURE';

export interface LoadBanners {
  type: typeof LOAD_BANNERS;
  payload: ActionPayload<LoadBannersRequest>;
}
export interface LoadBannersFailure {
  type: typeof LOAD_BANNERS_FAILURE;
  payload: BaseErrorResponse;
}
export interface LoadBannersSuccess {
  type: typeof LOAD_BANNERS_SUCCESS;
  payload: BaseResponse<LoadBannersResponse>;
}

export type Actions = Hydrate | LoadBanners | LoadBannersSuccess | LoadBannersFailure;

export interface State {
  error: string;
  loaded: boolean;
  loading: boolean;
  banners: BannerModel[];
}

export const initialState: State = {
  banners: [],
  error: '',
  loaded: false,
  loading: false,
};
export default function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload.banner }
    }

    case LOAD_BANNERS:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case LOAD_BANNERS_FAILURE:
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

    default:
      return state;
  }
}

export function loadBanners(data: LoadBannersRequest): LoadBanners {
  return {
    type: LOAD_BANNERS,
    payload: {
      request: {
        method: 'GET',
        url: `/Banner/${data.sessionId}/v1`,
      },
    },
  };
}

// selectors
export function getBannersBySectionId(state: State, sessionId: string): BannerModel[] {
  return state.banners.filter((p) => p.sessionId === sessionId);
}
