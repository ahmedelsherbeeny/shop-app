import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductCardComponent } from 'src/app/product-card/product-card.component';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-yourcart',
  templateUrl: './yourcart.component.html',
  styleUrls: ['./yourcart.component.css']
})
export class YourcartComponent implements OnInit {
  products:any
  grandTotal:number=0
  

  constructor(private cart:CartService) { }

  
  ngOnInit(): void {
    this.cart.getProduct().subscribe((res:any)=>{
      this.products=res
      
      this.grandTotal=this.cart.getTotalPrice();
      this.cart.Gtotal.next(this.grandTotal)

    })

  }
 
  remove(item:any){
    this.cart.removeItem(item)
  }
  emptyCart(){
    this.cart.removeAll()
  }
  
  

}
