import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-homeone-banner',
    templateUrl: './homeone-banner.component.html',
    styleUrls: ['./homeone-banner.component.scss']
})
export class HomeoneBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    mainBannerItem = [
        {
            subTitle: 'NEW INSPIRATION 2020',
            title: 'We Serve Your Dream Furniture',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            buttonIcon: 'bx bx-shopping-bag',
            buttonText: 'SHOP OUR PRODUCTS',
            buttonLink: 'shop-full-width-1',
            image: 'assets/img/main-banner-img1.jpg'
        },
        {
            subTitle: 'NEW INSPIRATION 2020',
            title: 'Bedroom Deals Up To 40% OFF',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            buttonIcon: 'bx bx-shopping-bag',
            buttonText: 'SHOP OUR PRODUCTS',
            buttonLink: 'shop-full-width-1',
            image: 'assets/img/main-banner-img2.jpg'
        },
        {
            subTitle: 'NEW INSPIRATION 2020',
            title: 'Baby Essentials Up To 50% OFF',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            buttonIcon: 'bx bx-shopping-bag',
            buttonText: 'SHOP OUR PRODUCTS',
            buttonLink: 'shop-full-width-1',
            image: 'assets/img/main-banner-img3.jpg'
        }
    ]
    bannerSocialLinks = [
        {
            icon: 'bx bxl-facebook',
            link: '#'
        },
        {
            icon: 'bx bxl-twitter',
            link: '#'
        },
        {
            icon: 'bx bxl-linkedin',
            link: '#'
        },
        {
            icon: 'bx bxl-instagram',
            link: '#'
        }
    ]
    bannerContactInfo = [
        {
            number: '+44 458 895 456',
            email: 'hello@fiwan.com'
        }
    ]

    homeSlidesOptions: OwlOptions = {
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		margin: 5,
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
