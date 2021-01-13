import { ProductItem } from '../Session/models';

export interface SearchRequest {
  searchText: string;
  page?: number;
  quantity?: number;
}

export interface SearchResponse {
  items: ProductItem[];
  count: number;
}
