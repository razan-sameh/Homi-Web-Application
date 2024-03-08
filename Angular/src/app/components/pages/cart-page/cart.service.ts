import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { product } from 'src/app/Models/Product';
import { Cart, CartItem, CartTotals } from 'src/app/Models/cart';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    baseUrl = environment.apiUrl;
    private cartSource = new BehaviorSubject<Cart|null>(null);
    cartSource$ = this.cartSource.asObservable();

    private CartTotalSource = new BehaviorSubject<CartTotals|null>(null);
    cartTotalsource$ =this.CartTotalSource.asObservable();

    constructor(private http:HttpClient) { }

    createPaymentIntent()
    {
        return this.http.post<Cart>(this.baseUrl + '/payments/'+ this.getCurrentCartValue()?.id,{})
        .pipe(
            map(basket => {
              this.cartSource.next(basket);
            })
          )
    }

    getCart(id:string){
        return this.http.get<Cart>(this.baseUrl+'Cart?id='+id).subscribe({
            next:(response:any)=>{
                this.cartSource.next(response);
                this.calculateTotals();
            },
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });;
    }
    setCart(cart : Cart){
        return this.http.post<Cart>(this.baseUrl+'Cart',cart).subscribe({
            next:(response:any)=>{
                this.cartSource.next(response);
                this.calculateTotals();
            },
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });;
    }
    getCurrentCartValue(){
        return this.cartSource.value;
    }
    private mapProductItemToCartItem(item:product){
        return{
            id:item.product_ID,
            productName:item.name,
            price:item.sPrice,
            quantity:0,
            pictureURL:item.pictureURL,
            brand:item.productBrand,
            type:item.productType
        }
    }
    addItemToCart(item:product|CartItem,quantity=1){
        if (this.isProduct(item)) item = this.mapProductItemToCartItem(item);
        const cart = this.getCurrentCartValue() ?? this.CreateCart();
        cart.items = this.addOrUpdatedItem(cart.items,item,quantity);
        this.setCart(cart);
    }
    removeItemFromCart(id:number,quantity=1){
        const cart = this.getCurrentCartValue();
        if(!cart){
            return;
        }
        const item = cart.items.find(x=>x.id === id);
        if (item) {
            item.quantity -= quantity
        }
        if (item.quantity === 0) {
            cart.items = cart.items.filter(x=>x.id !== id);
        }
        if (cart.items.length > 0) {
            this.setCart(cart)
        }
        else{
            this.deleteCart(cart)
        }
    }
    deleteCart(cart: Cart) {
        return this.http.delete(this.baseUrl+'Cart?id='+cart.id).subscribe({
            next:(response:any)=>{
                this.deleteLocalCart();
            },
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
    }
    deleteLocalCart(){
        this.cartSource.next(null);
        this.CartTotalSource.next(null);
        localStorage.removeItem("Cart_ID");
    }
    addOrUpdatedItem(items:CartItem[], itemToAdd:CartItem,quantity:number ):CartItem[]{
        const item = items.find(x => x.id === itemToAdd.id)
        if(item)item.quantity+=quantity;
        else{
            itemToAdd.quantity=quantity;
            items.push(itemToAdd)
        }
        return items;
    }
    CreateCart(): Cart {
        const cart = new Cart();
        localStorage.setItem("Cart_ID",cart.id);
        return cart;
    }
    private calculateTotals(){
        const cart = this.getCurrentCartValue();
        if (!cart) {
            return;
        }
        const shipping =50 ;
        const subTotal = cart.items.reduce((a,b)=>(b.price * b.quantity)+a,0);
        const Total = subTotal + shipping;
        this.CartTotalSource.next({shipping,Total,subTotal})
    }

    private isProduct(item:product|CartItem):item is product{
        return (item as product).productBrand!==undefined
    }
}
