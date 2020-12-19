import { ActionPayload, BaseErrorResponse, BaseResponse } from 'Store/Models/ReduxModels';
import { LoadProductDetailsRequest, LoadProductDetailsResponse, ProductModel } from './model';

export const LOAD_PRODUCT_DETAILS = 'LOAD_PRODUCT_DETAILS';
export const LOAD_PRODUCT_DETAILS_SUCCESS = 'LOAD_PRODUCT_DETAILS_SUCCESS';
export const LOAD_PRODUCT_DETAILS_FAILURE = 'LOAD_PRODUCT_DETAILS_FAILURE';

export interface LoadProductDetails {
  type: typeof LOAD_PRODUCT_DETAILS;
  payload: ActionPayload<LoadProductDetailsRequest>;
}

export interface LoadProductDetailsSuccess {
  type: typeof LOAD_PRODUCT_DETAILS_SUCCESS;
  payload: BaseResponse<LoadProductDetailsResponse>;
}

export interface LoadProductDetailsFailure {
  type: typeof LOAD_PRODUCT_DETAILS_FAILURE;
  payload: BaseErrorResponse;
}

export type ProductDetailsActions = LoadProductDetails | LoadProductDetailsSuccess | LoadProductDetailsFailure;

export interface ProductDetailsState extends ProductModel {
  error: string;
  loaded: boolean;
  loading: boolean;
}

export const initialState: ProductDetailsState = {
  error: '',
  loaded: false,
  loading: false,
  about: '',
  copyright: '',
  description: '',
  id: '',
  images: null,
  link: '',
  offerValidUntil: undefined,
  platforms: [],
  price: {
    discount: 0,
    discountPercent: 0,
    oldPrice: 0,
    price: 0,
  },
  storeLogoUrl: '',
  storeName: '',
  title: '',
};

export default function reducer(state = initialState, action: ProductDetailsActions): ProductDetailsState {
  switch (action.type) {
    case LOAD_PRODUCT_DETAILS:
      return {
        ...state,
        loading: false,
      };

    case LOAD_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        ...action.payload.data,
      };

    case LOAD_PRODUCT_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
      };

    default:
      return state;
  }
}

export function loadProductDetails(data: LoadProductDetailsRequest): LoadProductDetails {
  return {
    type: LOAD_PRODUCT_DETAILS,
    payload: {
      request: {
        method: 'GET',
        url: `/StoreProduct/${data.id}/v1`,
      },
    },
  };
}
