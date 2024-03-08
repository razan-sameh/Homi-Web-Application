import { Address } from "./user"

export interface orderToCreate
{
    cartId:string
    shipToAddress:Address
    deliveryMethodId:number
}

export interface order
{
    id:number
    buyerEmail:string
    orderDate:string
    shipToAddress:Address
    shippingPrice:number
    orderItems:orderItem[]
    subtotal:number
    status:string
    deliveryMethod:string
    total:number
}
export interface orderItem
{
    productId: number,
    productName: string,
    pictureUrl: string,
    price: number,
    quantity: number
}
