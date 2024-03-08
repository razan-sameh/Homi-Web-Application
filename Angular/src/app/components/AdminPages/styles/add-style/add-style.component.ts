import { Component, OnInit } from '@angular/core';
import { StylesService } from '../styles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-style',
  templateUrl: './add-style.component.html',
  styleUrls: ['./add-style.component.scss']
})
export class AddStyleComponent implements OnInit {
    constructor(private styleService:StylesService,private router:Router,private activtedRoure:ActivatedRoute) {
        this.returnUrl = this.activtedRoure.snapshot.queryParams['returnUrl'] || '/Styles';
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
            bgImage: 'assets/img/page-title-bg.jpg',
            title: 'Add Category'
        }
    ]
    onSubmit(){
        this.styleService.addStyle(this.addForm.value).subscribe({
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
