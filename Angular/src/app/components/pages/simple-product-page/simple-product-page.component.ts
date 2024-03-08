import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pagination } from 'src/app/Models/Pagging';
import { product } from 'src/app/Models/Product';
import { ShopService } from '../shop-left-sidebar-page-two/shop.service';
import { Brand } from 'src/app/Models/brands';
import { type } from 'src/app/Models/types';
import { shopParams } from 'src/app/Models/shopParams';
import { Color } from 'src/app/Models/Colors';
import { Style } from 'src/app/Models/Styles';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart-page/cart.service';
import { take } from 'rxjs/operators';
import { WishListService } from '../wishlist-page/wish-list.service';

@Component({
    selector: 'app-simple-product-page',
    templateUrl: './simple-product-page.component.html',
    styleUrls: ['./simple-product-page.component.scss']
})
export class SimpleProductPageComponent implements OnInit {
    product?: product;
    ID:any;
    quantity=1;
    quantityInCart=0;
    constructor(private shopService:ShopService, private activatedRoute : ActivatedRoute,private cartService:CartService,
        private wishListService:WishListService) {
        this.ID = this.activatedRoute.snapshot.params["id"];
    }
    ngOnInit(): void {
        this.loadProduct();
    }
    addItemToWishList(){
        if (this.product) {
            this.wishListService.addItemToWishList(this.product)
        }
    }
    addItemToCart(){
        if (this.product) {
            this.cartService.addItemToCart(this.product)
        }
    }
    loadProduct(){
        if (this.ID ) {
            this.shopService.getProduct(+this.ID).subscribe({
                next:(response:any)=>{
                    this.product = response;
                    this.cartService.cartSource$.pipe(take(1)).subscribe({
                        next:(cart:any)=>{
                            const item = cart?.items.find(x=>x.id===+this.ID)
                            if (item) {
                                this.quantity= item.quantity;
                                this.quantityInCart = item.quantity;
                            }
                        }
                    })
                },
                error:(error:any)=>console.log(error),
                complete:()=>console.log("Request completed")
            });
        }
    }
    incrementQuantity(){
        this.quantity++;
    }
    decrementQuantity(){
        this.quantity--;
    }
    updateCart(){
        if (this.product) {
            if (this.quantity > this.quantityInCart) {
                const itemToAdd = this.quantity- this.quantityInCart
                this.quantityInCart += itemToAdd;
                this.cartService.addItemToCart(this.product,itemToAdd)
            }
            else{
                const itemToRemove = this.quantityInCart- this.quantity;
                this.quantityInCart -= itemToRemove;
                this.cartService.removeItemFromCart(this.product.product_ID,itemToRemove)

            }
        }
    }
    get buttonText(){
        return this.quantityInCart === 0?'ADD TO CART':'UPDATE CART'
    }

    pageTitle = [
        {
            bgImage: 'assets/img/page-title-bg.jpg',
            title: 'Ergonomic Desk Sofa'
        }
    ]

}
