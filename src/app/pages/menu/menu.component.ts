import {  Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  products:any=[]
category:any
filteredprods:any[]=[]


active=true
searchkey:any
categories:any

  constructor(private prodser:ProductsService,private cart:CartService,private acroute:ActivatedRoute) { }
 

 
  

  ngOnInit(): void {
    this.prodser.getproduct().subscribe(prods=>{
      this.products=prods
      this.filteredprods=this.products


      this.products.forEach((a:any)=>{
        if(a.category==="men's clothing" || a.category==="women's clothing"){
          a.category="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price})
        
        
      })
     
    })
    this.cart.searchkey.subscribe((a:any)=>{
      this.searchkey=a
    })
    
    
    

    




  }
  filtercat(category:any){
    this.filteredprods=this.products.filter((a:any)=>{
      if(a.category===category || category===""){
        return a
      }
    })

  }

  add(item:any){

    this.cart.addToCart(item)
    
    

  }
  
   

  
  

  
  
  

}
