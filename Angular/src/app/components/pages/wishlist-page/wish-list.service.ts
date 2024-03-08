import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from 'src/app/Models/Product';
import { WishList, WishListItem } from 'src/app/Models/wishList';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class WishListService {
    baseUrl = environment.apiUrl;
    private wishListSource = new BehaviorSubject<WishList|null>(null);
    wishListSource$ = this.wishListSource.asObservable();

    constructor(private http:HttpClient) { }

    getWishList(id:string){
        return this.http.get<WishList>(this.baseUrl+'WishList?id='+id).subscribe({
            next:(response:any)=>{
                this.wishListSource.next(response);
            },
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });;
    }
    setWishList(WishList : WishList){
        return this.http.post<WishList>(this.baseUrl+'WishList',WishList).subscribe({
            next:(response:any)=>{
                this.wishListSource.next(response);
            },
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });;
    }
    getCurrentWishListValue(){
        return this.wishListSource.value;
    }
    private mapProductItemToWishListItem(item:product){
        return{
            id:item.product_ID,
            productName:item.name,
            price:item.sPrice,
            stock:item.stock,
            quantity:1,
            pictureURL:item.pictureURL,
            brand:item.productBrand,
            type:item.productType
        }
    }
    CreateWishList(): WishList {
        const _WishList = new WishList();
        localStorage.setItem("WishList_ID",_WishList.id);
        return _WishList;
    }
    private isProduct(item:product|WishListItem):item is product{
        return (item as product).productBrand!==undefined
    }
    addOrUpdatedItem(items:WishListItem[], itemToAdd:WishListItem):WishListItem[]{
        const item = items.find(x => x.id === itemToAdd.id)
        if(item) this.removeItemFromCart(item.id);
        else{
            items.push(itemToAdd)
        }
        return items;
    }
    addItemToWishList(item:product|WishListItem){
        if (this.isProduct(item)) item = this.mapProductItemToWishListItem(item);
        const cart = this.getCurrentWishListValue() ?? this.CreateWishList();
        cart.items = this.addOrUpdatedItem(cart.items,item);
        this.setWishList(cart);
    }
    deleteLocalWishList(){
        this.wishListSource.next(null);
        localStorage.removeItem("WishList_ID");
    }
    deleteWishList(wishList: WishList) {
        return this.http.delete(this.baseUrl+'WishList?id='+wishList.id).subscribe({
            next:(response:any)=>{
                this.deleteLocalWishList();
            },
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
    }
    removeItemFromCart(id:number){
        const wishList = this.getCurrentWishListValue();
        if(!wishList){
            return;
        }
        const item = wishList.items.find(x=>x.id === id);
        wishList.items = wishList.items.filter(x=>x.id !== id);
        if (wishList.items.length > 0) {
            this.setWishList(wishList)
        }
        else{
            this.deleteWishList(wishList)
        }
    }
}
