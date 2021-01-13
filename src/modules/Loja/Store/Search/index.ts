import { HYDRATE } from 'next-redux-wrapper';
import { ProductItem } from '../Session/models';
import { SearchRequest, SearchResponse } from './models';
import {
  ActionPayload,
  BaseErrorResponse,
  BaseResponse,
  Hydrate,
} from 'store/models/ReduxModels';

export const SEARCH = 'SEARCH';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';

export interface Search {
  type: typeof SEARCH;
  payload: ActionPayload<SearchRequest>;
}

export interface SearchSuccess {
  type: typeof SEARCH_SUCCESS;
  payload: BaseResponse<SearchResponse>;
}

export interface SearchsFailure {
  type: typeof SEARCH_FAILURE;
  payload: BaseErrorResponse;
}

export type Actions = Hydrate | Search | SearchsFailure | SearchSuccess;

export interface State {
  error: string;
  loaded: boolean;
  loading: boolean;
  items: ProductItem[];
  count: number;
}

export const initialState: State = {
  error: '',
  items: [],
  loaded: false,
  loading: false,
  count: 0,
};

export default function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload.search }
    }

    case SEARCH:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        items: [...state.items, ...action.payload.data.items],
      };

    default:
      return state;
  }
}

export function search(data: SearchRequest): Search {
  return {
    type: SEARCH,
    payload: {
      request: {
        method: 'GET',
        url: `/StoreProduct/v1?searchText=${data.searchText}&page=${data.page}&quantity=${data.quantity}`,
      },
    },
  };
}
