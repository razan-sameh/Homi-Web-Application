import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { order, orderToCreate } from 'src/app/Models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {
    baseUrl = environment.apiUrl;

    constructor(private http:HttpClient) { }
    createOrder(order:orderToCreate){
        return this.http.post<order>(this.baseUrl+'Orders',order)
    }

}
