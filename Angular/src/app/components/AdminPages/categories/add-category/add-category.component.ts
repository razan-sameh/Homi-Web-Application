import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
    constructor(private typeService:CategoriesService,private router:Router,private activtedRoure:ActivatedRoute) {
        this.returnUrl = this.activtedRoure.snapshot.queryParams['returnUrl'] || '/Categories';
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
            title: 'Add Category'
        }
    ]
    onSubmit(){
        this.typeService.addType(this.addForm.value).subscribe({
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
