import { ApiRequest } from 'Store/Models/ReduxModels';

export function fakeBackend(request: ApiRequest) {
  const { url } = request;

  if (url === '/Auth/Login/v2') {
    return new Promise(function (resolve, reject) {
      const response: any = {};

      resolve({ data: response });
    });
  }

  return false;
}
