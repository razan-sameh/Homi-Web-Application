import { Component, Input, OnInit } from '@angular/core';
import { WishListService } from './wish-list.service';
import { CartService } from '../cart-page/cart.service';
import { product } from 'src/app/Models/Product';

@Component({
    selector: 'app-wishlist-page',
    templateUrl: './wishlist-page.component.html',
    styleUrls: ['./wishlist-page.component.scss']
})
export class WishlistPageComponent implements OnInit {

    constructor(public wishListService:WishListService ,public cartService:CartService) { }

    ngOnInit(): void {
    }
    addItemToCart(product : product,quantity:number){
        this.cartService.addItemToCart(product,quantity)
    }
    removeItem(id:number){
        this.wishListService.removeItemFromCart(id)
    }
    pageTitle = [
        {
            bgImage: 'assets/img/categories/pexels-taryn-elliott-4112237.jpg',
            title: 'Wishlist'
        }
    ]

}
