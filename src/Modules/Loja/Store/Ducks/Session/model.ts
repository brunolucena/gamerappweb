export interface ProductItem {
		sessionId: string;
		name: string;
		id: string;
		imageUrl: string;
		price: number;
		oldPrice?: number;
		isSteam: boolean;
		discount: number;
		isUplay: boolean;
		isOrigin: boolean;
		mac: boolean;
		windows: boolean;
		linux: boolean;
		offerValidUntil?: Date;
		url: string
}

export interface LoadSessionRequest {
	sessionId: string;
}

export interface LoadSessionResponse {
	items: ProductItem[];
	count: number;
	name: string;
}
