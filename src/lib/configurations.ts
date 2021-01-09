import axios, { ResponseType } from 'axios';

export type UrlApis = '' | 'development' | 'local' | 'postman' | 'viacep' | 'paypal';
export type Environments = any;

function getClient(client: UrlApis, environment: Environments) {
  let baseURL = 'https://gamerapp-api.azurewebsites.net';
  const responseType: ResponseType = 'json';

  switch (client) {
    case 'development':
      baseURL = 'https://gamerapp-api-dev.azurewebsites.net';
      break;

    case 'local': {
      baseURL = 'http://192.168.0.14:3000';
      break;
    }

    case 'postman': {
      baseURL = 'https://0a18dae5-6691-4d6e-b1d9-f9bd6e0e2a23.mock.pstmn.io';
      break;
    }

    case 'viacep': {
      baseURL = 'https://viacep.com.br/';
      break;
    }

    case 'paypal': {
      baseURL = environment === 'production' ? 'https://api.paypal.com' : 'https://api.sandbox.paypal.com';
      break;
    }

    default: {
      baseURL =
        environment === 'production'
          ? 'https://gamerapp-api.azurewebsites.net'
          : environment === 'development'
            ? 'https://gamerapp-api-dev.azurewebsites.net'
            : 'https://0a18dae5-6691-4d6e-b1d9-f9bd6e0e2a23.mock.pstmn.io';
      break;
    }
  }

  return axios.create({
    baseURL,
    responseType,
  });
}

export async function loadConfiguration() {
  const client = getClient('', 'production');

  client.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const { response } = error;
      const { data } = response;

      return Promise.reject(data || response || error);
    },
  );

  const res = await client.get('https://gamerapp-api-dev.azurewebsites.net/StoreProduct/Config/v1?isFeedSession=true');

  try {
    return res.data.sessions;
  } catch {
    return [];
  }
}
