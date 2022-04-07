import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemList:any=[]
  productList:any=new BehaviorSubject<any>([])
  searchkey:any=new BehaviorSubject<string>('')
  Gtotal:any=new BehaviorSubject<number>(0)

  constructor() { }
  getProduct(){
    return this.productList.asObservable();
  }
  setproduct(product:any){
    this.cartItemList.push(...product)
    this.productList.next(product)
  }
  addToCart(product:any){
    
  

    
    
      this.cartItemList.push(product);
      this.getTotalPrice();
    
      this.productList.next(this.cartItemList)

    
    
      
  }
  



    
  
        
        
        
  
        
      
      
     
  
  
  
  
    
  
  getTotalPrice():number{
    let allTotal=0
    this.cartItemList.map((a:any)=>{
      allTotal+=a.total
    })
    return allTotal
  }
 
  removeItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1)

      }
    })
    this.productList.next(this.cartItemList)

  }
  removeAll(){
    this.cartItemList=[]
    this.productList.next(this.cartItemList)
  }
}
