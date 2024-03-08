import * as cuid from 'cuid';
export interface WishListItem{
    id: number;
    productName: string;
    price: number;
    quantity: number;
    stock: number;
    pictureURL: string;
    brand: string;
    type: string;
}

export interface WishList{
    id: string;
    items: WishListItem[];
}

export class WishList implements WishList{
    id = cuid();
    items: WishListItem[] = [];
}
