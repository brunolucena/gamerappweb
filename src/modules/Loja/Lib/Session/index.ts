import Api from 'lib/Api';
import { BaseResponse } from 'lib/Api/models';
import { LoadSessionRequest, LoadSessionResponse } from './models';

export async function loadSession({ sessionId, quantity }: LoadSessionRequest): Promise<BaseResponse<LoadSessionResponse>> {
  try {
    const res = await Api({ method: 'GET', url: `/Session/${sessionId}/v1?quantity=${quantity ?? 20}` });

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
