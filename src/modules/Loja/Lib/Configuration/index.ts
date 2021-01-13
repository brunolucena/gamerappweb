import Api from 'store/Api';
import { BaseResponse } from 'store/Api/models';
import { LoadConfigurationResponse } from './models';

export async function loadConfiguration(): Promise<BaseResponse<LoadConfigurationResponse>> {
  try {
    const res = await Api({
      payload: {
        request: {
          method: 'GET',
          url: '/StoreProduct/Config/v1?isFeedSession=true',
        },
      },
      type: 'LOAD_CONFIGURATION',
    });

    return {
      success: true,
      data: res.data,
    };
  } catch (e) {
    return {
      success: true,
      data: e,
    };
  }
}
