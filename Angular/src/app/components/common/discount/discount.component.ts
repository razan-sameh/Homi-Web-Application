import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-discount',
    templateUrl: './discount.component.html',
    styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    discountContent = [
        {
            title: 'SALE ENDS IN 1 DAY',
            discount: '50% OFF',
            buttonIcon: 'bx bx-shopping-bag',
            buttonText: 'BROWSE PRODUCTS',
            buttonLink: 'shop-left-sidebar-1'
        }
    ]
    discountImage = [
        {
            mainImg: 'assets/img/discount-img.png',
            discountParcentImg: 'assets/img/discount.png'
        }
    ]

}