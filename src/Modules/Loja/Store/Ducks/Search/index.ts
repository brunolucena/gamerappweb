import { ActionPayload, BaseErrorResponse, BaseResponse } from 'Store/Models/ReduxModels';
import { ProductItem } from '../Session/model';
import { SearchRequest, SearchResponse } from './model';

export const SEARCH = 'SEARCH';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';
export const SEARCH_CLEAR = 'SEARCH_CLEAR';

export interface Search {
  type: typeof SEARCH;
  payload: ActionPayload<SearchRequest>;
}

export interface SearchSuccess {
  type: typeof SEARCH_SUCCESS;
  payload: BaseResponse<SearchResponse>;
}

export interface SearchClear {
  type: typeof SEARCH_CLEAR;
  payload: [];
}

export interface SearchsFailure {
  type: typeof SEARCH_FAILURE;
  payload: BaseErrorResponse;
}

export type SessionActions = Search | SearchSuccess | SearchsFailure | SearchClear;

export interface SearchState {
  error: string;
  loaded: boolean;
  loading: boolean;
  items: ProductItem[];
  count: number;
}

export const initialState: SearchState = {
  error: '',
  items: [],
  loaded: false,
  loading: false,
  count: 0,
};

export default function reducer(state = initialState, action: SessionActions): SearchState {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        loading: false,
        loaded: false,
      };

    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        items: [...state.items, ...action.payload.data.items],
      };

    case SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
      };

      case SEARCH_CLEAR:
      return {
        ...state,
        loading: false,
        loaded: false,
        items: []
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

export function searchClear() {
  return {
    type: SEARCH_CLEAR,
  };
}
