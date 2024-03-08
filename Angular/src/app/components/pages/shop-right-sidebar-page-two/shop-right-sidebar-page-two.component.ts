import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-shop-right-sidebar-page-two',
    templateUrl: './shop-right-sidebar-page-two.component.html',
    styleUrls: ['./shop-right-sidebar-page-two.component.scss']
})
export class ShopRightSidebarPageTwoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        this.resetOption = [this.options[0]];
    }

    pageTitle = [
        {
            bgImage: 'assets/img/page-title-bg.jpg',
            title: 'Shop Left Sidebar'
        }
    ]
    singleProductsItem = [
        {
            mainImg: 'assets/img/products/products4.jpg',
            title: 'Ergonomic Desk Sofa',
            newPrice: '$150.00',
            oldPrice: '',
            sale: '',
            outOfStock: '',
            detailsLink: 'simple-product'
        },
        {
            mainImg: 'assets/img/products/products5.jpg',
            title: 'Office Desk Sofa',
            newPrice: '$199.00',
            oldPrice: '$210.00',
            sale: 'Sale!',
            outOfStock: '',
            detailsLink: 'simple-product'
        },
        {
            mainImg: 'assets/img/products/products6.jpg',
            title: 'Swivel Sofa',
            newPrice: '$223.99',
            oldPrice: '',
            sale: '',
            outOfStock: '',
            detailsLink: 'simple-product'
        },
        {
            mainImg: 'assets/img/products/products7.jpg',
            title: 'Home Alisa Sofa',
            newPrice: '$199.00',
            oldPrice: '$210.00',
            sale: '',
            outOfStock: 'Out of Stock',
            detailsLink: 'simple-product'
        },
        {
            mainImg: 'assets/img/products/products8.jpg',
            title: 'Grey Harrington Sofa',
            newPrice: '$199.00',
            oldPrice: '$210.00',
            sale: 'Sale!',
            outOfStock: '',
            detailsLink: 'simple-product'
        },
        {
            mainImg: 'assets/img/products/products9.jpg',
            title: 'Home Alisa Sofa',
            newPrice: '$223.99',
            oldPrice: '',
            sale: '',
            outOfStock: '',
            detailsLink: 'simple-product'
        },
        {
            mainImg: 'assets/img/products/products10.jpg',
            title: 'Wood Patio Chair',
            newPrice: '$226.00',
            oldPrice: '',
            sale: '',
            outOfStock: '',
            detailsLink: 'simple-product'
        },
        {
            mainImg: 'assets/img/products/products11.jpg',
            title: 'Brown Vinyl Padded',
            newPrice: '$107.99',
            oldPrice: '$140.99',
            sale: '',
            outOfStock: '',
            detailsLink: 'simple-product'
        },
        {
            mainImg: 'assets/img/products/products12.jpg',
            title: 'Antique Walnut',
            newPrice: '$98.99',
            oldPrice: '',
            sale: '',
            outOfStock: '',
            detailsLink: 'simple-product'
        },
        {
            mainImg: 'assets/img/products/products6.jpg',
            title: 'Swivel Sofa',
            newPrice: '$223.99',
            oldPrice: '',
            sale: '',
            outOfStock: '',
            detailsLink: 'simple-product'
        },
        {
            mainImg: 'assets/img/products/products7.jpg',
            title: 'Home Alisa Sofa',
            newPrice: '$199.00',
            oldPrice: '$210.00',
            sale: '',
            outOfStock: 'Out of Stock',
            detailsLink: 'simple-product'
        },
        {
            mainImg: 'assets/img/products/products8.jpg',
            title: 'Grey Harrington Sofa',
            newPrice: '$199.00',
            oldPrice: '$210.00',
            sale: 'Sale!',
            outOfStock: '',
            detailsLink: 'simple-product'
        }
    ]

    // For Pagination
    shopRightSidebar: number = 1;

    // Category Select
    singleSelect: any = [];
    multiSelect: any = [];
    stringArray: any = [];
    objectsArray: any = [];
    resetOption: any;
    config = {
        displayKey: "name",
        search: true
    };
    options = [
        {
            name: "Default",
        },
        {
            name: "Popularity",
        },
        {
            name: "Latest",
        },
        {
            name: "Price: low to high",
        },
        {
            name: "Price: high to low",
        }
    ];
    searchChange($event) {
        console.log($event);
    }
    reset() {
        this.resetOption = [];
    }

}