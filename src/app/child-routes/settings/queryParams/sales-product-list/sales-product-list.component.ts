import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-product-list',
  templateUrl: './sales-product-list.component.html',
  styleUrls: ['./sales-product-list.component.scss'],
})
export class SalesProductListComponent  implements OnInit {
  productList = [
    {
      id:1,
      name :'redmi note 10 pro max',
      price : 2400,
      description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      rating : 5
    },
    {
      id:2,
      name :'redmi note 11 pro max',
      price : 2432,
      description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      rating : 1
    },
    {
      id:3,
      name :'redmi not4 1 pro max',
      price : 4322,
      description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      rating : 2
    },
    {
      id:4,
      name :'redmi not 16 pro max',
      price : 6574,
      description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      rating : 3
    },
    {
      id:5,
      name :'redmi not 15 pro max',
      price : 3422,
      description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      rating : 4
    }
  ]
  constructor() { }

  ngOnInit() {}

}
