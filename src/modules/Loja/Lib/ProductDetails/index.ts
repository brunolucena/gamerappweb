import Api from 'store/Api';
import { BaseResponse } from 'store/Api/models';
import { LoadProductDetailsRequest, LoadProductDetailsResponse } from './models';

export async function loadProductDetails(data: LoadProductDetailsRequest): Promise<BaseResponse<LoadProductDetailsResponse>> {
  try {
    const res = await Api({
      payload: {
        request: {
          method: 'GET',
          url: `/StoreProduct/${data.id}/v1`,
        },
      },
      type: 'LOAD_PRODUCT_DETAILS',
    });

    if (!res.data.success) {
      const errorMessage = { code: 500, message: 'Produto não encontrado' };

      throw errorMessage;
    }

    return {
      success: true,
      data: res.data,
    };
  } catch (e) {
    return {
      success: false,
      data: e,
    };
  }
}
