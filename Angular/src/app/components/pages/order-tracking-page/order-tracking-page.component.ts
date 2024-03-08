import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-order-tracking-page',
    templateUrl: './order-tracking-page.component.html',
    styleUrls: ['./order-tracking-page.component.scss']
})
export class OrderTrackingPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            bgImage: 'assets/img/page-title-bg.jpg',
            title: 'Order Tracking'
        }
    ]

}