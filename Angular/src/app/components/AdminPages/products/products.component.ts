import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/Models/Product';
import { shopParams } from 'src/app/Models/shopParams';
import { ProductsService } from './products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss','./product.css']
})
export class ProductsComponent implements OnInit{
    constructor(public productService:ProductsService,private router:Router,private activtedRoure:ActivatedRoute) {
        this.returnUrl = this.activtedRoure.snapshot.queryParams['returnUrl'] || '/Products';
    }
    products: product[]=[];
    shopParams= new shopParams();
    returnUrl:string ="";

    ngOnInit() : void{
        this.getProducts();
    }
    removeItem(id:number){
        this.productService.deleteProductById(+id).subscribe({
            next:(response:any)=>{
                this.router.navigateByUrl(this.returnUrl)
            },
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
    }
    getProducts()
    {
        this.productService.getProducts(this.shopParams).subscribe({
            next:(response:any)=>{
                this.products = response.data
            },
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
    }


    pageTitle = [
        {
            bgImage: 'assets/img/categories/pexels-terje-sollie-298842.jpg',
            title: 'Products'
        }
    ]
}
