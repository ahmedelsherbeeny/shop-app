import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { YourcartComponent } from '../pages/yourcart/yourcart.component';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'ordered-item',
  templateUrl: './ordered-item.component.html',
  styleUrls: ['./ordered-item.component.css']
})
export class OrderedItemComponent implements OnInit {
  total:number=0



    
  constructor(private prodser:ProductsService,private acroute:ActivatedRoute,private cart:CartService) { }
  

  ngOnInit(): void {
    this.cart.Gtotal.subscribe((a:any)=>{
      this.total=a

    })
    
      
      
      }
      
    

    
  }
  
  
  


 



