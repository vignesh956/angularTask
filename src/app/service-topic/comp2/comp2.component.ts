import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
})
export class Comp2Component  implements OnInit {
  productList :any= [];
  constructor(public ps : ProductListService) { }

  ngOnInit() {
    this.productList = this.ps.getAllProductList();
  }

}
