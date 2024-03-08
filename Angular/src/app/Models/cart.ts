import * as cuid from 'cuid';
export interface CartItem{
    id: number;
    productName: string;
    price: number;
    quantity: number;
    pictureURL: string;
    brand: string;
    type: string;
}

export interface Cart{
    id: string;
    items: CartItem[];
    clientSecret?:string;
    paymentIntentId?:string;
    deliveryMethodId?:number;
    shippingPrice:number;
}

export class Cart implements Cart{
    id = cuid();
    items: CartItem[] = [];
    shippingPrice = 0;
}
export interface CartTotals{
    shipping: number;
    subTotal: number;
    Total: number;
}
