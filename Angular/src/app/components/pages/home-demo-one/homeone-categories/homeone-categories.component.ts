import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-categories',
    templateUrl: './homeone-categories.component.html',
    styleUrls: ['./homeone-categories.component.scss']
})
export class HomeoneCategoriesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleCategoriesBigBox = [
        {
            img: 'assets/img/categories/categories1.jpg',
            title: 'Recent Products',
            buttonText: 'Shop Now',
            link: 'shop-full-width-1'
        }
    ]
    singleCategoriesBox = [
        {
            img: 'assets/img/categories/categories2.jpg',
            title: 'New Design',
            buttonText: 'Shop Now',
            link: 'shop-full-width-1'
        },
        {
            img: 'assets/img/categories/categories3.jpg',
            title: 'Minimal Sofa',
            buttonText: 'Shop Now',
            link: 'shop-full-width-1'
        }
    ]

}