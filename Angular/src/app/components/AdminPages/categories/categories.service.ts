import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { type } from 'src/app/Models/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

    constructor(private http:HttpClient) { }
    private BaseUrl = environment.apiUrl;

    getTypes()
    {
        return this.http.get<type[]>(this.BaseUrl+'Types');
    }
    getTypeByID(id:any){
    return this.http.get(this.BaseUrl+'Types/'+id)
    }
    updateType(id,data){
        return this.http.put<type>(this.BaseUrl+'Types/'+id,data)
    }
    addType(newStu:any){
        return this.http.post(this.BaseUrl+'Types',newStu);
    }
    deleteType(id:any){
        return this.http.delete(this.BaseUrl+'Types/'+id);
    }

}
