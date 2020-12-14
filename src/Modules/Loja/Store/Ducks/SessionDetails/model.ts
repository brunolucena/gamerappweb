import { ProductItem } from '../Session/model';

export interface LoadSessionDetailsRequest {
	sessionId: string;
	page: number;
	quantity: number;
}

export interface LoadSessionDetailsResponse {
	sessions: ProductItem[];
	count: number;
	name: string;
}
