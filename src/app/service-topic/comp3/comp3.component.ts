import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss'],
})
export class Comp3Component  implements OnInit {
  productList :any= [];
  constructor(public ps : ProductListService) { }

  ngOnInit() {
    this.productList = this.ps.getAllProductList();
  }

}