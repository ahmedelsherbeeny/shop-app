import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'nav-page',
  templateUrl: './nav-page.component.html',
  styleUrls: ['./nav-page.component.css']
})
export class NavPageComponent implements OnInit {
  totalitems:any
  searchword:any

  constructor(private cart:CartService,public router:Router) { }

  ngOnInit(): void {
    this.cart.getProduct().subscribe((res:any)=>{
      this.totalitems=res.length

    })

  }
  search($event: any){
    this.searchword=($event.target as HTMLInputElement).value
    this.cart.searchkey.next(this.searchword)

  }
  


}
