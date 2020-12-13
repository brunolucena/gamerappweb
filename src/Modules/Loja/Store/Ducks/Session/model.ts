export interface ProductItem {
	sessionId: string;
	name: string;
	id: string;
	imageUrl: string;
	price: number;
	oldPrice?: number;
	isSteam: boolean;
	isUplay: boolean;
	isOrigin: boolean;
	mac: boolean;
	windows: boolean;
	linux: boolean;
	offerValidUntil?: Date;
}

export interface LoadSessionRequest {
	sessionId: string;
}

export interface LoadSessionResponse {
	sessions: ProductItem[];
	count: number;
	name: string;
}
