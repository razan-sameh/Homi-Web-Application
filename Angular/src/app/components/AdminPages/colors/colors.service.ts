import { HttpClient } from '@angular/common/http';
import { core } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Color } from 'src/app/Models/Colors';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

    constructor(private http:HttpClient) { }
    private BaseUrl = environment.apiUrl;

    getColors()
    {
        return this.http.get<Color[]>(this.BaseUrl+'Colors');
    }
    getColorByID(id:any){
    return this.http.get(this.BaseUrl+'Colors/'+id)
    }
    updateColor(id,data){
        return this.http.put<Color>(this.BaseUrl+'Colors/'+id,data)
    }
    addColor(newStu:any){
        return this.http.post(this.BaseUrl+'Colors',newStu);
    }
    deleteColor(id:any){
        return this.http.delete(this.BaseUrl+'Colors/'+id);
    }}
