export interface ProductModel {
	id: string;
	images: string[];
	title: string;
	description: string;
	price: number;
	oldPrice?: number;
	isSteam: boolean;
	isUplay: boolean;
	isOrigin: boolean;
	mac: boolean;
	windows: boolean;
	linux: boolean;
	storeName: string;
	storeLogoUrl?: string;
	about: string;
	copyright?: string;
	link: string;
}

export interface LoadProductDetailsRequest {
	id: string;
}

export interface LoadProductDetailsResponse extends ProductModel {}
