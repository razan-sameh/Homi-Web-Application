import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sticky-product-page',
    templateUrl: './sticky-product-page.component.html',
    styleUrls: ['./sticky-product-page.component.scss']
})
export class StickyProductPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            bgImage: 'assets/img/page-title-bg.jpg',
            title: 'Ergonomic Desk Sofa'
        }
    ]

}