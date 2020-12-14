import { ProductItem } from '../Session/model';

export interface SearchRequest {
	searchText: string;
	page?: number;
	quantity?: number;
}

export interface SearchResponse {
	items: ProductItem[];
	count: number;
}
