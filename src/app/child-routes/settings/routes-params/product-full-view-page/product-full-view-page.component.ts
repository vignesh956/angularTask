import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-full-view-page',
  templateUrl: './product-full-view-page.component.html',
  styleUrls: ['./product-full-view-page.component.scss'],
})
export class ProductFullViewPageComponent  implements OnInit {
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
  filterProperty: any;
  constructor(public ac : ActivatedRoute) { 
const productId = Number(this.ac.snapshot.paramMap.get('id'));
console.log(typeof(productId))

this.filterProperty = this.productList.filter(productObj => productObj.id == productId);
console.log(this.filterProperty , 'filterProperty')
  }

  ngOnInit() {}

}


// snapshot  : paramsMap & queryParamMap
//subscribe : params & queryParams