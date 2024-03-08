import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../colors.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Color } from 'src/app/Models/Colors';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updated-color',
  templateUrl: './updated-color.component.html',
  styleUrls: ['./updated-color.component.scss']
})
export class UpdatedColorComponent implements OnInit{
    constructor(private colorService:ColorsService,private router:Router,private activtedRoure:ActivatedRoute) {
        this.returnUrl = this.activtedRoure.snapshot.queryParams['returnUrl'] || '/Colors';
        this.ID = this.activtedRoure.snapshot.params["id"];

    }
    private BaseUrl = environment.apiUrl;

    returnUrl:string ="";
    ngOnInit(): void {
        this.loadProduct();
    }
    color?: Color;
    ID:any;
    loadProduct(){
        if (this.ID ) {
            this.colorService.getColorByID(+this.ID).subscribe({
                next:(response:any)=>{
                    this.color = response;
                    console.log(this.addForm.value),
                    console.log(this.returnUrl),
                    this.addForm.patchValue({
                        name: this.color.name
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
            bgImage: 'assets/img/page-title-bg.jpg',
            title: 'Update Color'
        }
    ]
    onSubmit(){
        this.colorService.updateColor(this.ID,this.addForm.value).subscribe({
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
