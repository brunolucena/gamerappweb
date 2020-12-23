export interface ProductItem {
		sessionId: string;
		name: string;
		id: string;
		imageUrl: string;
		price: PriceItem;
		oldPrice?: number;
		isSteam: boolean;
		discount: number;
		isUplay: boolean;
		isOrigin: boolean;
		mac: boolean;
		windows: boolean;
		linux: boolean;
		offerValidUntil?: Date;
		url: string;
}

export interface PriceItem {
	discount: number;
	discountPercent: number;
	oldPrice: number;
	price: number;
}

export interface LoadSessionRequest {
	sessionId: string;
	quantity?: number;
}

export interface LoadSessionResponse {
	items: ProductItem[];
	count: number;
	name: string;
}
