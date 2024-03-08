import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/Models/Product';
import { ShopService } from '../shop-left-sidebar-page-two/shop.service';
import { Pagination } from 'src/app/Models/Pagging';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart-page/cart.service';
import { WishListService } from '../wishlist-page/wish-list.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss','./product-item.css']
})
export class ProductItemComponent implements OnInit {

     @Input() product?: product; //optional
    // singleProductsItem = [
    //     {
    //         mainImg: 'assets/img/products/products4.jpg',
    //         title: 'Ergonomic Desk Sofa',
    //         newPrice: '$150.00',
    //         oldPrice: '',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/products/products5.jpg',
    //         title: 'Office Desk Sofa',
    //         newPrice: '$199.00',
    //         oldPrice: '$210.00',
    //         sale: 'Sale!',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/products/products6.jpg',
    //         title: 'Swivel Sofa',
    //         newPrice: '$223.99',
    //         oldPrice: '',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/products/products7.jpg',
    //         title: 'Home Alisa Sofa',
    //         newPrice: '$199.00',
    //         oldPrice: '$210.00',
    //         sale: '',
    //         outOfStock: 'Out of Stock',
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
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/products/products10.jpg',
    //         title: 'Wood Patio Chair',
    //         newPrice: '$226.00',
    //         oldPrice: '',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/products/products11.jpg',
    //         title: 'Brown Vinyl Padded',
    //         newPrice: '$107.99',
    //         oldPrice: '$140.99',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/products/products12.jpg',
    //         title: 'Antique Walnut',
    //         newPrice: '$98.99',
    //         oldPrice: '',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/products/products6.jpg',
    //         title: 'Swivel Sofa',
    //         newPrice: '$223.99',
    //         oldPrice: '',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/products/products7.jpg',
    //         title: 'Home Alisa Sofa',
    //         newPrice: '$199.00',
    //         oldPrice: '$210.00',
    //         sale: '',
    //         outOfStock: 'Out of Stock',
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
    //     }
    // ]
    constructor(private shopService:ShopService, private activatedRoute : ActivatedRoute,private cartService:CartService,
        private wishListService:WishListService) { }

    shopLeftSidebar: number = 1;

    ngOnInit() : void{
        // this.getProducts();
        // this.getBrands();
        // this.getTypes();
    }
    addItemToCart(){
        if (this.product) {
            this.cartService.addItemToCart(this.product)
        }
    }
    addItemToWishList(){
        if (this.product) {
            this.wishListService.addItemToWishList(this.product)
        }
    }
}
