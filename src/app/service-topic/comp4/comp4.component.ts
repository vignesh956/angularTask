import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.scss'],
})
export class Comp4Component  implements OnInit {
  productList :any= [];
  constructor(public ps : ProductListService) { }

  ngOnInit() {
    this.productList = this.ps.getAllProductList();
  }

}
