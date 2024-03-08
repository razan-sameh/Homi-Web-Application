import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Pagination } from 'src/app/Models/Pagging';
import { product } from 'src/app/Models/Product';
import { Brand } from 'src/app/Models/brands';
import { type } from 'src/app/Models/types';
import { shopParams } from 'src/app/Models/shopParams';
import { Color } from 'src/app/Models/Colors';
import { Style } from 'src/app/Models/Styles';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

    constructor(private http:HttpClient) { }
    // baseUrl:string ="http://localhost:3000/"
    baseUrl:any = "https://localhost:44306/api/";
getProducts(shopParams: shopParams,activeFilters: { name: string, value: string }[]) {
    let params = new HttpParams();
    if (shopParams.brandId > 0) {
        params = params.append('brandId', shopParams.brandId.toString());
    }
    if (shopParams.typeId) {
        params = params.append('typeId', shopParams.typeId.toString());
    }
    if (shopParams.colorId) {
        params = params.append('colorId', shopParams.colorId.toString());
    }
    if (shopParams.styleId) {
        params = params.append('styleId', shopParams.styleId.toString());
    }
    if (shopParams.sort) {
        params = params.append('sort', shopParams.sort);
    }
    params = params.append('pageIndex', shopParams.pageNumber.toString());
    params = params.append('pageSize', shopParams.pageSize.toString());
    if (shopParams.search) {
        params = params.append('search', shopParams.search);
    }


    // Add active filters to the params object
    if (activeFilters.length > 0) {
        activeFilters.forEach(filter => {
            params = params.append(filter.name, filter.value);
        });
    }

    return this.http.get<Pagination<product[]>>(this.baseUrl + 'Product/AllProducts', { params: params });
}
    // getProducts(shopParams: shopParams)
    // {
    //     let params = new HttpParams();
    //     if(shopParams.brandId>0) params.append('brandId',shopParams.brandId);
    //     if(shopParams.typeId) params.append('typeId',shopParams.typeId);
    //     if(shopParams.colorId) params.append('colorId',shopParams.colorId);
    //     if(shopParams.styleId) params.append('styleId',shopParams.styleId);
    //     if(shopParams.sort) params.append('sort',shopParams.sort); //b3tnahom l elbackend
    //     params=params.append("pageIndex",shopParams.pageNumber);
    //     params=params.append("pageSize",shopParams.pageSize);
    //     if(shopParams.search) params.append('search',shopParams.search);

    //     return this.http.get<Pagination<product[]>>(this.baseUrl+'Product/AllProducts?',{params:params}); //or products?

    // }

    getBrands()
    {
        return this.http.get<Brand[]>(this.baseUrl+'Product/brands');
    }

    getTypes()
    {
        return this.http.get<type[]>(this.baseUrl+'Product/Types');
    }
    getStyles()
    {
        return this.http.get<Style[]>(this.baseUrl+'Product/Styles');
    }
    getColors()
    {
        return this.http.get<Color[]>(this.baseUrl+'Product/Colors');
    }
    getProduct(id:number){
        console.log(id);
        return this.http.get<product>(this.baseUrl+'Product/Product/'+id)
    }
}
