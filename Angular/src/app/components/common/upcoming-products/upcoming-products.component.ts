import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-upcoming-products',
    templateUrl: './upcoming-products.component.html',
    styleUrls: ['./upcoming-products.component.scss']
})
export class UpcomingProductsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            title: "Upcoming Products",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
        }
    ]
    singleProductsBox = [
        {
            mainImg: 'assets/img/products/products1.jpg',
            title: 'Rivet Farr Lotus',
            newPrice: '$150.00',
            oldPrice: '',
            detailsLink: 'simple-product'
        },
        {
            mainImg: 'assets/img/products/products2.jpg',
            title: 'Modern Leather Soft',
            newPrice: '$199.00',
            oldPrice: '$210.00',
            sale: 'Sale!',
            detailsLink: 'simple-product'
        },
        {
            mainImg: 'assets/img/products/products3.jpg',
            title: 'Mesh Computer Desk',
            newPrice: '$223.99',
            oldPrice: '',
            detailsLink: 'simple-product'
        },
        {
            mainImg: 'assets/img/products/products2.jpg',
            title: 'Modern Leather Soft',
            newPrice: '$199.00',
            oldPrice: '$210.00',
            sale: 'Sale!',
            detailsLink: 'simple-product'
        }
    ]

    productsSlidesOptions: OwlOptions = {
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
    }

}