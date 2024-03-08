import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Style } from 'src/app/Models/Styles';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StylesService {

    constructor(private http:HttpClient) { }
    private BaseUrl = environment.apiUrl;

    getStyles()
    {
        return this.http.get<Style[]>(this.BaseUrl+'Styles');
    }
    getStyleByID(id:any){
    return this.http.get(this.BaseUrl+'Styles/'+id)
    }
    updateStyle(id,data){
        return this.http.put<Style>(this.BaseUrl+'Styles/'+id,data)
    }
    addStyle(newStu:any){
        return this.http.post(this.BaseUrl+'Styles',newStu);
    }
    deleteStyle(id:any){
        return this.http.delete(this.BaseUrl+'Styles/'+id);
    }}
