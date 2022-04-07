import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private prodser:ProductsService) { }
products:any
  ngOnInit(): void {
    this.products=this.prodser.getproduct()
  }

}
