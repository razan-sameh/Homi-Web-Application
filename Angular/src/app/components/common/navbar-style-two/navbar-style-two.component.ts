import { Component, OnInit } from '@angular/core';
import { CartService } from '../../pages/cart-page/cart.service';
import { AccountService } from '../../pages/my-account-page/account.service';

@Component({
    selector: 'app-navbar-style-two',
    templateUrl: './navbar-style-two.component.html',
    styleUrls: ['./navbar-style-two.component.scss']
})
export class NavbarStyleTwoComponent implements OnInit {
    admin:any = false;

    constructor(public accoutService:AccountService) { }

    ngOnInit(): void {
        this.admin = this.accoutService.isAdmin;
        if (this.admin != true) {
            this.admin = false
        }
    }

    // classApplied = false;
    // toggleClass() {
    //     this.classApplied = !this.classApplied;
    // }

}
