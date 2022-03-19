import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'ordered-item',
  templateUrl: './ordered-item.component.html',
  styleUrls: ['./ordered-item.component.css']
})
export class OrderedItemComponent implements OnInit {
  menuData:any
orderId:any
    
  constructor(private prodser:ProductsService,private acroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.orderId=this.acroute.snapshot.paramMap.get('id')
      
      if(this.orderId){
        this.menuData=this.prodser.products.filter((p)=>{
          return p.id==this.orderId
        })
      }
    

    
  }
  
  

}
 



