import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from 'src/app/Models/brands';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

    constructor(private http:HttpClient) { }
    private BaseUrl = environment.apiUrl;

    getBrands()
    {
        return this.http.get<Brand[]>(this.BaseUrl+'Brand');
    }
    getBrandByID(id:any){
    return this.http.get(this.BaseUrl+'Brand/'+id)
    }
    updaterBrand(id,data){
        return this.http.put<Brand>(this.BaseUrl+'Brand/'+id,data)
    }
    addBrand(newStu:any){
        return this.http.post(this.BaseUrl+'Brand',newStu);
    }
    deleteBrand(id:any){
        return this.http.delete(this.BaseUrl+'Brand/'+id);
    }}
