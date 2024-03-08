import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {
    baseUrl = environment.apiUrl;
    constructor(private http : HttpClient) { }

    ngOnInit(): void {
    }
    get404Error(){
        this.http.get(this.baseUrl+"Product/Product/100").subscribe({
            next:(response:any)=>{
                console.log(response);
            },
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
    }
    get500Error(){
        this.http.get(this.baseUrl+"Buggy/servererror").subscribe({
            next:(response:any)=>{
                console.log(response);
            },
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
    }
    get400Error(){
        this.http.get(this.baseUrl+"Buggy/badrequest").subscribe({
            next:(response:any)=>{
                console.log(response);
            },
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
    }
    get400ValidError(){
        this.http.get(this.baseUrl+"Product/Product/four").subscribe({
            next:(response:any)=>{
                console.log(response);
            },
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
    }
}
