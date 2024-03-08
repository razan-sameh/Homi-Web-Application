import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/Models/Product';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
    product?: product;
    ID:any;
    returnUrl:string ="";
    constructor(public productService:ProductsService,private router:Router,private activtedRoute:ActivatedRoute) {
        this.returnUrl = this.activtedRoute.snapshot.queryParams['returnUrl'] || '/Products';
        this.ID = this.activtedRoute.snapshot.params["id"];

    }
    ngOnInit(): void {
        this.loadProduct();
    }
    loadProduct(){
        if (this.ID ) {
            this.productService.getProductByID(+this.ID).subscribe({
                next:(response:any)=>{
                    this.product = response;
                },
                error:(error:any)=>console.log(error),
                complete:()=>console.log("Request completed")
            });
        }
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

}
