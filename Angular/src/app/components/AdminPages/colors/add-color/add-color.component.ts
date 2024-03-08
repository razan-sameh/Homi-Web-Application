import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../colors.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.scss']
})
export class AddColorComponent implements OnInit {
    constructor(private colorService:ColorsService,private router:Router,private activtedRoure:ActivatedRoute) {
        this.returnUrl = this.activtedRoure.snapshot.queryParams['returnUrl'] || '/Colors';
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
            title: 'Add Color'
        }
    ]
    onSubmit(){
        this.colorService.addColor(this.addForm.value).subscribe({
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
