import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { type } from 'src/app/Models/types';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss','./category.css']
})
export class CategoriesComponent implements OnInit{
    constructor(public typeService:CategoriesService, private router:Router,private activtedRoure:ActivatedRoute) {
        this.returnUrl = this.activtedRoure.snapshot.queryParams['returnUrl'] || '/Categories';
    }
    types: type[]=[];

    returnUrl:string ="";

    ngOnInit() : void{
        this.getTypes();
    }

    removeItem(id:number){
        this.typeService.deleteType(+id).subscribe({
            next:(response:any)=>{
                this.router.navigateByUrl(this.returnUrl)
                this.getTypes();
            },
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
    }

    getTypes()
    {
        this.typeService.getTypes().subscribe({
            next:(response:any)=>this.types =response,
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
    }


    pageTitle = [
        {
            bgImage: 'assets/img/categories/pexels-terje-sollie-298842.jpg',
            title: 'Categories'
        }
    ]
}

