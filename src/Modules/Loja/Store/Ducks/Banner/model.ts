export interface BannerModel {
	name: string;
	imageUrl: string;
	storeProductId: string;
	price: number;
	oldPrice?: number;
	offerValidUntil: Date;
	sessionId: string;
}

export interface LoadBannersRequest {
	sessionId: string;
}

export interface LoadBannerResponse {
	banners: BannerModel[];
}
