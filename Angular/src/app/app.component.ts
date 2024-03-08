import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
import { CartService } from './components/pages/cart-page/cart.service';
import { AccountService } from './components/pages/my-account-page/account.service';
import { WishListService } from './components/pages/wishlist-page/wish-list.service';
import { user } from './Models/user';
import { Role } from './Models/Role';
declare let $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent {
    location: any;
    routerSubscription: any;
    title:any;
    constructor(private router: Router,private accountService:AccountService,private cartService:CartService,
        private wishListService:WishListService) {

    }

    admin:any = false;
    ngOnInit(){
        this.recallJsFuntions();
        const cartId = localStorage.getItem("Cart_ID");
        if (cartId) {
            this.cartService.getCart(cartId);
        }
        const wishListID =localStorage.getItem("WishList_ID");
        if (wishListID) {
            this.wishListService.getWishList(wishListID);
        }
        this.loadCurrentUser();

    }

    loadCurrentUser(){
        const token = localStorage.getItem('Token');
        this.accountService.loadCurrentUser(token);
    }

    recallJsFuntions() {
        this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
        .subscribe(event => {
            this.admin = this.accountService.isAdmin;
            if (this.admin != true) {
                this.admin = false
            }
            $.getScript('../assets/js/main.js');
            this.location = this.router.url;
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}
