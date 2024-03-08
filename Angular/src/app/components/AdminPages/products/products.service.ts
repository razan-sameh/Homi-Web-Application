import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from 'src/app/Models/Pagging';
import { product } from 'src/app/Models/Product';
import { environment } from 'src/environments/environment';
import { shopParams } from 'src/app/Models/shopParams';
import { Color } from 'src/app/Models/Colors';
import { Style } from 'src/app/Models/Styles';
import { type } from 'src/app/Models/types';
import { Brand } from 'src/app/Models/brands';
import { Supplier } from 'src/app/Models/supplier';
import { Discount } from 'src/app/Models/discount';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    constructor(private http:HttpClient) { }
    private BaseUrl = environment.apiUrl;

    getProducts(shopParams: shopParams)
    {
        let params = new HttpParams();
        //params=params.append("pageIndex",1);
        params=params.append("pageSize",100);
        return this.http.get<Pagination<product[]>>(this.BaseUrl+'Product/AllProducts?',{params:params}); //or products?

    }

    // getProducts(){
    //     return this.http.get(this.BaseUrl+'Product/AllProducts')
    // }
    getProductByID(id:any){
        return this.http.get(this.BaseUrl+'Product/Product/'+id)
    }
    updateProduct(id:any,data){
        return this.http.put<product>(this.BaseUrl+'Product/'+id,data)
    }
    addProduct(newStu:any){
        return this.http.post<product>(this.BaseUrl+'Product',newStu);
    }
    deleteProductById(id:any){
        return this.http.delete(this.BaseUrl+'Product/'+id);
    }
    getBrands()
    {
        return this.http.get<Brand[]>(this.BaseUrl+'Product/brands');
    }

    getTypes()
    {
        return this.http.get<type[]>(this.BaseUrl+'Product/Types');
    }
    getStyles()
    {
        return this.http.get<Style[]>(this.BaseUrl+'Product/Styles');
    }
    getColors()
    {
        return this.http.get<Color[]>(this.BaseUrl+'Product/Colors');
    }
    getSuppliers()
    {
        return this.http.get<Supplier[]>(this.BaseUrl+'Product/Supplier');
    }
    getDiscounts()
    {
        return this.http.get<Discount[]>(this.BaseUrl+'Product/Discount');
    }
}
