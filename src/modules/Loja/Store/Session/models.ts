import { ProductPlatform } from '../ProductDetails/models';

export interface PriceItem {
  discount: number;
  discountPercent: number;
  oldPrice: number;
  price: number;
}

export interface ProductItem {
  discount: number | null;
  id: string;
  imageUrl: string;
  isAvailable: boolean;
  name: string;
  offerValidUntil?: Date | string;
  platforms?: ProductPlatform[];
  price: PriceItem;
  productId: string | null;
  sessionId: string;
  url: string;
}

export interface Session {
  count: number;
  items: ProductItem[];
  name: string;
}

export interface LoadSessionRequest {
  quantity?: number;
  sessionId: string;
}

export interface LoadSessionResponse extends Session { }
