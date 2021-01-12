import axios from 'axios';
import configs from 'lib/configs';
import { Action } from 'store/models/ReduxModels';

async function Api(action: Action<any>) {
  const { data, method, url } = action.payload.request;

  const client = axios.create({
    baseURL: configs.apiUrl,
    responseType: 'json',
  });

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

  if (method === 'POST') {
    return client.post(url, data);
  } else if (method === 'PUT') {
    return client.put(url, data);
  } else if (method === 'DELETE') {
    return client.delete(url);
  } else {
    return client.get(url, data);
  }
}

export default Api;
