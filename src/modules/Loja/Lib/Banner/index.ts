import Api from 'lib/Api';
import { BaseResponse } from 'lib/Api/models';
import { LoadBannerResponse, LoadBannersRequest } from './models';

export async function loadBanners({ sessionId }: LoadBannersRequest): Promise<BaseResponse<LoadBannerResponse>> {
  try {
    const res = await Api({ method: 'GET', url: `/Banner/${sessionId}/v1` });

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
