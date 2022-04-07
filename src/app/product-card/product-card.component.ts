import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input ('product') product:any=[]
  quan:any
  isActivated:boolean=true

  constructor(private cart:CartService) { }

  ngOnInit(): void {
  }

  add(){
  
      this.cart.addToCart(this.product)
  this.isActivated=!this.isActivated

    

   
  


  }
  
 
 

}
