import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homethree-categories',
    templateUrl: './homethree-categories.component.html',
    styleUrls: ['./homethree-categories.component.scss']
})
export class HomethreeCategoriesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleCategoriesItem = [
        {
            img: 'assets/img/categories/categories4.jpg',
            title: 'Popular Products',
            items: '35 Items',
            buttonText: 'Shop Now',
            link: 'shop-left-sidebar-1'
        },
        {
            img: 'assets/img/categories/categories5.jpg',
            title: 'New Items',
            items: '25 Items',
            buttonText: 'Shop Now',
            link: 'shop-left-sidebar-1'
        }
    ]

}