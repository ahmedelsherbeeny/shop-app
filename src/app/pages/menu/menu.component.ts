import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  products:any
categories:any
category:any
filteredprods:any[]=[]
menuData:any
orderId:any
  constructor(private prodser:ProductsService,private acroute:ActivatedRoute) { }
  

  ngOnInit(): void {
    this.products=this.prodser.products
    this.categories=this.prodser.categories
    this.acroute.queryParamMap.subscribe(params=>{
      this.category=params.get('category')
      this.filteredprods=this.category? this.prodser.products.filter(p=> p.name===this.category):this.products

    })
    

    




  }
  
  
  

}
