import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../brands.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Brand } from 'src/app/Models/brands';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updated-brand',
  templateUrl: './updated-brand.component.html',
  styleUrls: ['./updated-brand.component.scss']
})
export class UpdatedBrandComponent implements OnInit{
    constructor(private brandService:BrandsService,private router:Router,private activtedRoure:ActivatedRoute) {
        this.returnUrl = this.activtedRoure.snapshot.queryParams['returnUrl'] || '/Brands';
        this.ID = this.activtedRoure.snapshot.params["id"];

    }
    private BaseUrl = environment.apiUrl;

    returnUrl:string ="";
    ngOnInit(): void {
        this.loadProduct();
    }
    brand?: Brand;
    ID:any;
    loadProduct(){
        if (this.ID ) {
            this.brandService.getBrandByID(+this.ID).subscribe({
                next:(response:any)=>{
                    this.brand = response;
                    console.log(this.addForm.value),
                    console.log(this.returnUrl),
                    this.addForm.patchValue({
                        name: this.brand.name
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
            title: 'Update Brand'
        }
    ]
    onSubmit(){
        this.brandService.updaterBrand(this.ID,this.addForm.value).subscribe({
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

