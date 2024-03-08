import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CategoriesService } from '../categories.service';
import { type } from 'src/app/Models/types';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updated-category',
  templateUrl: './updated-category.component.html',
  styleUrls: ['./updated-category.component.scss']
})
export class UpdatedCategoryComponent implements OnInit{
    constructor(private typeService:CategoriesService,private router:Router,private activtedRoure:ActivatedRoute) {
        this.returnUrl = this.activtedRoure.snapshot.queryParams['returnUrl'] || '/Categories';
        this.ID = this.activtedRoure.snapshot.params["id"];

    }
    private BaseUrl = environment.apiUrl;

    returnUrl:string ="";
    ngOnInit(): void {
        this.loadProduct();
    }
    type?: type;
    ID:any;
    loadProduct(){
        if (this.ID ) {
            this.typeService.getTypeByID(+this.ID).subscribe({
                next:(response:any)=>{
                    this.type = response;
                    console.log(this.addForm.value),
                    console.log(this.returnUrl),
                    this.addForm.patchValue({
                        name: this.type.name
                    });
                },
                error:(error:any)=>console.log(error),
                complete:()=>console.log("Request completed")
            });
        }
    }
    addForm = new FormGroup({
        name:new FormControl('',[Validators.required]),
    })
    pageTitle = [
        {
            bgImage: 'assets/img/categories/pexels-terje-sollie-298842.jpg',
            title: 'Update Category'
        }
    ]
    onSubmit(){
        this.typeService.updateType(this.ID,this.addForm.value).subscribe({
            next:(user:any)=>{
                this.router.navigateByUrl(this.returnUrl),

                console.log(this.addForm.value);
                console.log(this.returnUrl);
            },
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")

        })

    }
}

