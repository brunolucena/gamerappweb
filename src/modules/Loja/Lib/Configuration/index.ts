import Api from 'lib/Api';
import { BaseResponse } from 'lib/Api/models';
import { LoadConfigurationResponse } from './models';

export async function loadConfiguration(): Promise<BaseResponse<LoadConfigurationResponse>> {
  try {
    const res = await Api({ method: 'GET', url: '/StoreProduct/Config/v1?isFeedSession=true' });

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

export async function loadMenuConfiguration(): Promise<BaseResponse<LoadConfigurationResponse>> {
  try {
    const res = await Api({ method: 'GET', url: '/StoreProduct/Config/v1?isMenuSession=true' });

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
