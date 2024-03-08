import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-kitchen-room-products',
    templateUrl: './kitchen-room-products.component.html',
    styleUrls: ['./kitchen-room-products.component.scss']
})
export class KitchenRoomProductsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    roomsContent = [
        {
            bgImage: 'assets/img/rooms/rooms-bg3.jpg',
            title: 'Kitchen',
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
            buttonText: 'SHOP KITCHEN',
            buttonLink: 'shop-full-width-1'
        }
    ]
    
    singleProductsBox = [
        {
            mainImg: 'assets/img/products/products7.jpg',
            title: 'Fabric Arm Sofa',
            newPrice: '$220.00',
            oldPrice: '',
            outOfStock: '',
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
            outOfStock: '',
            detailsLink: 'simple-product'
        },
        {
            mainImg: 'assets/img/products/products6.jpg',
            title: 'Ergonomic Desk Sofa',
            newPrice: '$199.00',
            oldPrice: '$210.00',
            outOfStock: 'Out of Stock',
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