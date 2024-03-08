import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../brands.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss']
})
export class AddBrandComponent implements OnInit {
    constructor(private brandService:BrandsService,private router:Router,private activtedRoure:ActivatedRoute) {
        this.returnUrl = this.activtedRoure.snapshot.queryParams['returnUrl'] || '/Brands';
    }
    private BaseUrl = environment.apiUrl;
    returnUrl:string ="";
    ngOnInit(): void {
    }
    addForm = new FormGroup({
        name:new FormControl('',[Validators.required,Validators.maxLength(30)]),

    })
    pageTitle = [
        {
            bgImage: 'assets/img/categories/pexels-terje-sollie-298842.jpg',
            title: 'Add Brand'
        }
    ]
    onSubmit(){
        this.brandService.addBrand(this.addForm.value).subscribe({
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
