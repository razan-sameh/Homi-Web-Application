import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-deal-in-this-week',
    templateUrl: './deal-in-this-week.component.html',
    styleUrls: ['./deal-in-this-week.component.scss']
})
export class DealInThisWeekComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    dealOfTheWeekContent = [
        {
            title: 'Deal In This Week',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
            discountPercent: '50% OFF',
            buttonIcon: 'bx bx-shopping-bag',
            buttonText: 'SHOP NOW',
            buttonLink: 'shop-left-sidebar-2'
        }
    ]
    dealOfTheWeekImage = [
        {
            img: 'assets/img/products/deal-of-the-week.png'
        }
    ]

}
