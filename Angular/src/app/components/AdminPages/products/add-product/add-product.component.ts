import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Brand } from 'src/app/Models/brands';
import { type } from 'src/app/Models/types';
import { Color } from 'src/app/Models/Colors';
import { Style } from 'src/app/Models/Styles';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Supplier } from 'src/app/Models/supplier';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss','../product.css']
})
export class AddProductComponent implements OnInit {
    constructor(private productService:ProductsService,private router:Router,private activtedRoure:ActivatedRoute, private http:HttpClient) {
        this.returnUrl = this.activtedRoure.snapshot.queryParams['returnUrl'] || '/Products';
    }
    private BaseUrl = environment.apiUrl;
    brands: Brand[] = [];
    types: type[] = [];
    colors: Color[] = [];
    styles: Style[] = [];
    suppliers: Supplier[] = [];
    discounts: Supplier[] = [];
    returnUrl:string ="";
    ngOnInit(): void {
        this.getBrands();
        this.getTypes();
        this.getStyles();
        this.getColors();
        this.getSuppliers();
        this.getDiscounts();
    }
    addForm = new FormGroup({
        name:new FormControl('',[Validators.required,Validators.maxLength(30)]),
        color:new FormControl('',Validators.required),
        stock:new FormControl(0,Validators.required),
        dimensions:new FormControl('',Validators.required),
        style:new FormControl('',Validators.required),
        pictureURL:new FormControl('',Validators.required),
        describtion:new FormControl('',Validators.required),
        sPrice:new FormControl(0,Validators.required),
        pPrice:new FormControl(0,Validators.required),
        productType:new FormControl('',Validators.required),
        productBrand:new FormControl('',Validators.required),
        supplier:new FormControl('',Validators.required),
        discount:new FormControl(0,Validators.required),
        specialFeature:new FormControl(''),
    })
    pageTitle = [
        {
            bgImage: 'assets/img/categories/pexels-terje-sollie-298842.jpg',
            title: 'Add Product'
        }
    ]
    onSubmit(){
        this.productService.addProduct(this.addForm.value).subscribe({
            next:(user:any)=>{
                this.router.navigateByUrl(this.returnUrl),
                console.log(this.addForm.value);
                console.log(this.returnUrl);
            },
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")

        })

    }

    getBrands()
    {
        this.productService.getBrands().subscribe({
            next:(response:any)=>this.brands = response,
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
    }

    getTypes()
    {
        this.productService.getTypes().subscribe({
            next:(response:any)=>{
                this.types = response
            },
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
    }
    getStyles()
    {
        this.productService.getStyles().subscribe({
            next:(response:any)=>this.styles = response,
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
    }
    getColors()
    {
        this.productService.getColors().subscribe({
            next:(response:any)=>this.colors = response,
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
    }
    getSuppliers()
    {
        this.productService.getSuppliers().subscribe({
            next:(response:any)=>this.suppliers = response,
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
    }
    getDiscounts()
    {
        this.productService.getDiscounts().subscribe({
            next:(response:any)=>this.discounts = response,
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
    }
    fileName = '';
    fileurl:any ="";
    requiredFileType=['jpg','png']
    onFileSelected(event) {
        const file:File = event.target.files[0];
        if (file) {
            this.fileName = file.name;
            this.fileurl = "assets/img/products/"+this.fileName;
            this.addForm.value.pictureURL = this.fileurl;
            const formData = new FormData();
            formData.append("thumbnail", file);
            console.log(file);
            console.log(this.fileName);
            console.log(this.fileurl);

            // const upload$ = this.http.post(this.BaseUrl+'ProductImg', formData);
            // upload$.subscribe();
        }
    }
    // onFileSelected(files: FileList) {
    //     if (files.length > 0) {
    //         const file = files[0];
    //         const formData = new FormData();
    //         formData.append('file', file);

    //         this.http.post(this.BaseUrl+'ProductImg', formData)
    //         .subscribe((response: any) => {
    //             console.log('File uploaded:', response.url);
    //         });
    //     }
    // }
}
