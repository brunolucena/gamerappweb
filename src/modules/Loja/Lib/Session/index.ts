import Api from 'store/Api';
import { BaseResponse } from 'store/Api/models';
import { LoadSessionRequest, LoadSessionResponse } from './models';

export async function loadSession({ sessionId, quantity }: LoadSessionRequest): Promise<BaseResponse<LoadSessionResponse>> {
  try {
    const res = await Api({
      payload: {
        request: {
          method: 'GET',
          url: `/Session/${sessionId}/v1?quantity=${quantity ?? 20}`,
        },
      },
      type: 'LOAD_SESSION',
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
