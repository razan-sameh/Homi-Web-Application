import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Pagination } from 'src/app/Models/Pagging';
import { product } from 'src/app/Models/Product';
import { CartService } from '../../pages/cart-page/cart.service';

@Component({
    selector: 'app-popular-products',
    templateUrl: './popular-products.component.html',
    styleUrls: ['./popular-products.component.scss']
})
export class PopularProductsComponent implements OnInit {

    constructor(private http:HttpClient,private cartService:CartService) { }
    singleProductsBox:any[]=[];
    cart = this.cartService;
    //BaseUrl:any = "http://localhost:3000/Products";
    BaseUrl:any = "https://localhost:44306/api/Product/AllProducts?pageSize=50";

    ngOnInit() : void{
        this.http.get<Pagination<product[]>>(this.BaseUrl).subscribe({
            next:(response:any)=>this.singleProductsBox = response.data,
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
        
    }

    sectionTitle = [
        {
            title: "Popular Products",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
        }
    ]
    // singleProductsBox = [
    //     {
    //         mainImg: 'assets/img/products/products7.jpg',
    //         title: 'Fabric Arm Sofa',
    //         newPrice: '$220.00',
    //         oldPrice: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/products/products8.jpg',
    //         title: 'Grey Harrington Sofa',
    //         newPrice: '$199.00',
    //         oldPrice: '$210.00',
    //         sale: 'Sale!',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/products/products9.jpg',
    //         title: 'Home Alisa Sofa',
    //         newPrice: '$223.99',
    //         oldPrice: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/products/products6.jpg',
    //         title: 'Ergonomic Desk Sofa',
    //         newPrice: '$199.00',
    //         oldPrice: '$210.00',
    //         outOfStock: 'Out of Stock',
    //         detailsLink: 'simple-product'
    //     }
    // ]

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
