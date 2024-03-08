import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-customer-service-page',
    templateUrl: './customer-service-page.component.html',
    styleUrls: ['./customer-service-page.component.scss']
})
export class CustomerServicePageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            bgImage: 'assets/img/page-title-bg.jpg',
            title: 'Customer Service'
        }
    ]

}