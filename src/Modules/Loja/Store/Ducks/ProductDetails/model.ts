export interface ProductPlatform {
  id: string;
  imageUrl: string;
  platformName: string;
}

export interface Price {
  price: number;
  oldPrice?: number;
  discount?: number;
}

export interface ProductModel {
  about: string;
  copyright?: string;
  description: string;
  id: string;
  images: string[] | null;
  link: string;
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
