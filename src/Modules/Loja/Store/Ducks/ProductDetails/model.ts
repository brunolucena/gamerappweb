export interface ProductPlatform {
  id: string;
  imageUrl: string;
  platformName: string;
}

export interface Price {
  discount?: number;
  discountPercent?: number;
  oldPrice?: number;
  price: number;
}

export interface ProductModel {
  about: string;
  copyright?: string;
  description: string;
  id: string;
  images: string[] | null;
  link: string;
  offerValidUntil?: Date;
  platforms: ProductPlatform[];
  price: Price;
  storeLogoUrl?: string;
  storeName: string;
  title: string;
}

export interface LoadProductDetailsRequest {
  id: string;
}

export interface LoadProductDetailsResponse extends ProductModel {}
