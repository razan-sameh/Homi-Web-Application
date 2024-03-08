import { Component, OnInit } from '@angular/core';
import { StylesService } from './styles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Style } from 'src/app/Models/Styles';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss','./style.css']
})
export class StylesComponent implements OnInit{
    constructor(public styleService:StylesService, private router:Router,private activtedRoure:ActivatedRoute) {
        this.returnUrl = this.activtedRoure.snapshot.queryParams['returnUrl'] || '/Styles';
    }
    styles: Style[]=[];

    returnUrl:string ="";

    ngOnInit() : void{
        this.getTypes();
    }

    removeItem(id:number){
        this.styleService.deleteStyle(+id).subscribe({
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
        this.styleService.getStyles().subscribe({
            next:(response:any)=>this.styles =response,
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
