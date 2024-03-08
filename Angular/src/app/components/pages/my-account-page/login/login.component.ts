import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    constructor(private accountService:AccountService,private router:Router,private activtedRoure:ActivatedRoute) {
        this.returnUrl = this.activtedRoure.snapshot.queryParams['returnUrl'] || '/';
    }
    returnUrl:string ="";
    ngOnInit(): void {
    }
    loginForm = new FormGroup({
        email:new FormControl('',Validators.required),
        password:new FormControl('',Validators.required)
    })
    pageTitle = [
        {
            bgImage: 'assets/img/categories/pexels-cecília-o-tommasini-904621.jpg',
            title: 'Login'
        }
    ]
    onSubmit(){
        this.accountService.login(this.loginForm.value).subscribe({
            next:(user:any)=>this.router.navigateByUrl(this.returnUrl),
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")

        })

    }
}
