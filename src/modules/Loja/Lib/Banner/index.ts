import Api from 'store/Api';
import { BaseResponse } from 'store/Api/models';
import { LoadBannerResponse, LoadBannersRequest } from './models';

export async function loadBanners({ sessionId }: LoadBannersRequest): Promise<BaseResponse<LoadBannerResponse>> {
  try {
    const res = await Api({
      payload: {
        request: {
          method: 'GET',
          url: `/Banner/${sessionId}/v1`,
        },
      },
      type: 'LOAD_BANNER',
    });

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
