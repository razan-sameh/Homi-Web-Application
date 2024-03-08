import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-living-room-products',
    templateUrl: './living-room-products.component.html',
    styleUrls: ['./living-room-products.component.scss']
})
export class LivingRoomProductsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    roomsContent = [
        {
            bgImage: 'assets/img/rooms/rooms-bg1.jpg',
            title: 'Living Room',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
            list: [
                {
                    title: 'Opt for light colours'
                },
                {
                    title: 'Think carefully about flooring'
                },
                {
                    title: 'Add a mirror'
                },
                {
                    title: 'Wall features'
                },
                {
                    title: 'Keep the space cosy'
                }
            ],
            buttonIcon: 'bx bx-shopping-bag',
            buttonText: 'SHOP LIVING ROOM',
            buttonLink: 'shop-full-width-1'
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