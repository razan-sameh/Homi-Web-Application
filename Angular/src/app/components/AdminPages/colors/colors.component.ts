import { Component, OnInit } from '@angular/core';
import { ColorsService } from './colors.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from 'src/app/Models/Colors';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss','./color.css']
})
export class ColorsComponent implements OnInit{
    constructor(public colorService:ColorsService, private router:Router,private activtedRoure:ActivatedRoute) {
        this.returnUrl = this.activtedRoure.snapshot.queryParams['returnUrl'] || '/Colors';
    }
    colors: Color[]=[];

    returnUrl:string ="";

    ngOnInit() : void{
        this.getTypes();
    }

    removeItem(id:number){
        this.colorService.deleteColor(+id).subscribe({
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
        this.colorService.getColors().subscribe({
            next:(response:any)=>this.colors =response,
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
    }


    pageTitle = [
        {
            bgImage: 'assets/img/page-title-bg.jpg',
            title: 'Categories'
        }
    ]
}


