import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Brand } from 'src/app/Models/brands';
import { type } from 'src/app/Models/types';
import { Color } from 'src/app/Models/Colors';
import { Style } from 'src/app/Models/Styles';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { product } from 'src/app/Models/Product';
import { Supplier } from 'src/app/Models/supplier';

@Component({
  selector: 'app-updated-product',
  templateUrl: './updated-product.component.html',
  styleUrls: ['./updated-product.component.scss']
})
export class UpdatedProductComponent implements OnInit{
    constructor(private productService:ProductsService,private router:Router,private activtedRoure:ActivatedRoute, private http:HttpClient) {
        this.returnUrl = this.activtedRoure.snapshot.queryParams['returnUrl'] || '/Products';
        this.ID = this.activtedRoure.snapshot.params["id"];

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
        this.loadProduct();
        this.getBrands();
        this.getTypes();
        this.getStyles();
        this.getColors();
        this.getSuppliers();
        this.getDiscounts();
    }
    product?: product;
    ID:any;
    loadProduct(){
        if (this.ID ) {
            this.productService.getProductByID(+this.ID).subscribe({
                next:(response:any)=>{
                    this.product = response;
                    this.addForm.patchValue({
                        name: this.product.name,
                        color:this.product.color,
                        dimensions:this.product.dimensions,
                        style:this.product.style,
                        pictureURL:this.product.pictureURL,
                        describtion:this.product.describtion,
                        stock:this.product.stock,
                        sPrice:this.product.sPrice,
                        pPrice:this.product.pPrice,
                        productType:this.product.productType,
                        productBrand:this.product.productBrand,
                        supplier:this.product.supplier,
                        discount:this.product.discount,
                        specialFeature:this.product.specialFeature,
                    });
                },
                error:(error:any)=>console.log(error),
                complete:()=>console.log("Request completed")
            });
        }
    }
    addForm = new FormGroup({
        name:new FormControl('',[Validators.required,Validators.maxLength(30)]),
        color:new FormControl('',Validators.required),
        stock:new FormControl(0,Validators.required),
        dimensions:new FormControl('',Validators.required),
        style:new FormControl('',Validators.required),
        pictureURL:new FormControl(null,Validators.required),
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
            title: 'Update Product'
        }
    ]
    onSubmit(){
        this.productService.updateProduct(this.ID,this.addForm.value).subscribe({
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
    // this InputVar is a reference to our input.

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
            // const upload$ = this.http.post(this.BaseUrl+'Product', formData);
            // upload$.subscribe();
        }
    }

}

