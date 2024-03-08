import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-hometwo-banner',
    templateUrl: './hometwo-banner.component.html',
    styleUrls: ['./hometwo-banner.component.scss']
})
export class HometwoBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    mainBannerItem = [
        {
            title: 'Bedroom Deals Up To 40% OFF',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            buttonIcon: 'bx bx-shopping-bag',
            buttonText: 'SHOP OUR PRODUCTS',
            buttonLink: 'shop-left-sidebar-2',
            image: 'assets/img/products/land (1).png'
        },
        // {
        //     title: 'We Serve Your Dream Furniture',
        //     paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        //     buttonIcon: 'bx bx-shopping-bag',
        //     buttonText: 'SHOP OUR PRODUCTS',
        //     buttonLink: 'shop-left-sidebar-2',
        //     image: 'assets/img/products/land (2).png'
        // },
        // {
        //     title: 'Baby Essentials Up To 50% OFF',
        //     paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        //     buttonIcon: 'bx bx-shopping-bag',
        //     buttonText: 'SHOP OUR PRODUCTS',
        //     buttonLink: 'shop-left-sidebar-2',
        //     image: 'assets/img/products/land (3).png'
        // }
    ]

    homeSlidesOptions: OwlOptions = {
		loop: true,
		nav: true,
		margin: 5,
		dots: false,
		autoplay: true,
		autoHeight: true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
                items: 1
			},
			576: {
                items: 1
			},
			768: {
                items: 1
			},
			992: {
                items: 1
			},
			1200: {
                items: 1
			}
		}
    }

}
