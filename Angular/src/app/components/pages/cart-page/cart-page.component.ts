import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { CartItem } from 'src/app/Models/cart';
import { CheckoutPageComponent } from '../checkout-page/checkout-page.component';
import { AccountService } from '../my-account-page/account.service';

@Component({
    selector: 'app-cart-page',
    templateUrl: './cart-page.component.html',
    styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

    constructor(public cartService:CartService,public accountService:AccountService) { }
    admin:any = false;
    ngOnInit(): void {
        this.admin = this.accountService.isAdmin;
        if (this.admin != true) {
            this.admin = false
        }
    }
    incrementquantity(item:CartItem){
        this.cartService.addItemToCart(item);
    }
    removeItem(id:number,quantity:number){
        this.cartService.removeItemFromCart(id,quantity)
    }
    pageTitle = [
        {
            bgImage: 'assets/img/categories/pexels-tom-swinnen-2972365.jpg',
            title: 'Cart'
        }
    ]

}
