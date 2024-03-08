import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { order } from 'src/app/Models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
    baseUrl = environment.apiUrl
    constructor(private http:HttpClient) { }
    getOrdersForUser(){
        return this.http.get<order[]>(this.baseUrl+'Orders');
    }
    getOrderDetails(id:number){
        return this.http.get<order>(this.baseUrl+'Orders/'+id);
    }
}
