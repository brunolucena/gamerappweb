import configs from 'lib/configs';
import useSWR from 'swr';
import { fetcher } from 'store/Api';
import { LoadConfigurationResponse } from './models';

export function useMenuConfiguration() {
  const { data, error } = useSWR<LoadConfigurationResponse>(`${configs.apiUrl}/StoreProduct/Config/v1?isMenuSession=true`, fetcher);

  return {
    data: data?.sessions ?? [],
    isLoading: !error && !data,
    isError: error,
  };
}
