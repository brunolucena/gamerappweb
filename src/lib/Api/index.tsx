import axios from 'axios';
import configs from 'lib/configs';
import { ApiRequest } from './models';

async function Api({ method, url, data }: ApiRequest) {
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
