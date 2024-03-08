import { Component, OnInit } from '@angular/core';
import { BrandsService } from './brands.service';
import { Brand } from 'src/app/Models/brands';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss','./brand.css']
})
export class BrandsComponent implements OnInit{
    constructor(public brandService:BrandsService, private router:Router,private activtedRoure:ActivatedRoute) {
        this.returnUrl = this.activtedRoure.snapshot.queryParams['returnUrl'] || '/Brands';
    }
    brands: Brand[]=[];

    returnUrl:string ="";

    ngOnInit() : void{
        this.getBrands();
    }

    removeItem(id:number){
        this.brandService.deleteBrand(+id).subscribe({
            next:(response:any)=>{
                this.router.navigateByUrl(this.returnUrl)
                this.getBrands();
            },
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
    }

    getBrands()
    {
        this.brandService.getBrands().subscribe({
            next:(response:any)=>this.brands =response,
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
    }



    pageTitle = [
        {
            bgImage: 'assets/img/categories/pexels-terje-sollie-298842.jpg',
            title: 'Brands'
        }
    ]
}
