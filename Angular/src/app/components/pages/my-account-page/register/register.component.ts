import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    constructor(private fb:FormBuilder,private accountService:AccountService,private router:Router) { }
    registerForm = this.fb.group({
        displayName:['',Validators.required],
        email:['',Validators.required],
        password:['',[Validators.required,Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{6,}/)]]
    })
    // registerForm = new FormGroup({
    //     displayName:new FormControl('',Validators.required),
    //     email:new FormControl('',Validators.required),
    //     password:new FormControl('',Validators.required)
    // })
    ngOnInit(): void {
    }
    onSubmit(){
        this.accountService.register(this.registerForm.value).subscribe({
            next:(user:any)=>this.router.navigateByUrl("/shop-left-sidebar-2"),
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        })

    }    pageTitle = [
        {
            bgImage: 'assets/img/categories/pexels-cecília-o-tommasini-904621.jpg',
            title: 'Register'
        }
    ]
}
