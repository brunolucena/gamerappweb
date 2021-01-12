export interface BannerModel {
  badgeText?: string;
  imageUrl: string;
  name?: string;
  offerValidUntil?: Date;
  oldPrice?: number;
  price?: number;
  sessionId: string;
  storeProductId?: string;
}

export interface LoadBannersRequest {
  sessionId: string;
}

export interface LoadBannerResponse {
  banners: BannerModel[];
}
