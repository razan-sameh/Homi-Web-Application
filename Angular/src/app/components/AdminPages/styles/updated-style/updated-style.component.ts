import { Component, OnInit } from '@angular/core';
import { StylesService } from '../styles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Style } from 'src/app/Models/Styles';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updated-style',
  templateUrl: './updated-style.component.html',
  styleUrls: ['./updated-style.component.scss']
})
export class UpdatedStyleComponent implements OnInit{
    constructor(private styleService:StylesService,private router:Router,private activtedRoure:ActivatedRoute) {
        this.returnUrl = this.activtedRoure.snapshot.queryParams['returnUrl'] || '/Styles';
        this.ID = this.activtedRoure.snapshot.params["id"];

    }
    private BaseUrl = environment.apiUrl;

    returnUrl:string ="";
    ngOnInit(): void {
        this.loadProduct();
    }
    style?: Style;
    ID:any;
    loadProduct(){
        if (this.ID ) {
            this.styleService.getStyleByID(+this.ID).subscribe({
                next:(response:any)=>{
                    this.style = response;
                    console.log(this.addForm.value),
                    console.log(this.returnUrl),
                    this.addForm.patchValue({
                        name: this.style.name
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
            title: 'Update Style'
        }
    ]
    onSubmit(){
        this.styleService.updateStyle(this.ID,this.addForm.value).subscribe({
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

