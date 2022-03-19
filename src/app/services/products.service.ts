import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private acroute:ActivatedRoute) { }


  
  categories=[{name:'pants'},{name:'jacket'},{name:'shoes'},{name:'bleizer'}]

  products=[{
    id:1,
    name:' jacket',
    price:50,
    material:'jeans',
    imageUrl:'assets/images/coat.jpg'
  },
  {
    id:2,
    name:'bleizer',
    price:80,
    material:'natural cloth',
    imageUrl:'assets/images/bleizer.jpg'

  },
  {
    id:3,
    name:'shoes',
    price:30,
    material:'fred berry boot',
    imageUrl:'assets/images/boot.jpg'

  },
  {
    id:4,
    name:'shoes',
    price:42,
    material:'lotti airmax',
    imageUrl:'assets/images/shoes.jpg'

  },
  {
    id:5,
    name:'jacket',
    price:55,
    material:'leather',
    imageUrl:'assets/images/jacket.jpg'

  },
  {
    id:6,
    name:'jacket',
    price:57,
    material:'cotton',
    imageUrl:'assets/images/jacket1.webp'

  },
  {
    id:7,
    name:'bleizer',
    price:85,
    material:'natural cloth',
    imageUrl:'assets/images/bleizer1.jpg'

  },
  {
    id:8,
    name:'pants',
    price:30,
    material:'natural cloth',
    imageUrl:'assets/images/pants2.webp'

  },
  
  {
    id:9,
    name:'pants',
    price:35,
    material:'natural cloth',
    imageUrl:'assets/images/pants.jpg'

  },
  
  {
    id:10,
    name:'pants',
    price:30,
    material:'natural cloth',
    imageUrl:'assets/images/pants1.webp'

  },
  
]
}
