import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component  implements OnInit {
  productList:any=[];
  constructor(public productListInfo : ProductListService) { }

  ngOnInit() {
  this.productList = this.productListInfo.getAllProductList();
  }

}
