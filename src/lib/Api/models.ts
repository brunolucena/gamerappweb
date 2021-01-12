export interface ApiRequest {
  data?: any;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
}

export interface BaseResponse<T> {
  success: boolean;
  data: T;
}
