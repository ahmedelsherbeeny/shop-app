import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private acroute:ActivatedRoute,private http:HttpClient) { }
  getproduct(){
    return this.http.get<any>("https://fakestoreapi.com/products/").pipe(map((res:any)=>{

    
    return res;

  }))

  }


  
  categories=[{name:"fashion"},{name:"men's clothing"},{name:"electronics"},{name:"jewelery"},{name: "women's clothing"}]
  getcategories(){
    return this.categories
  }

 
}
