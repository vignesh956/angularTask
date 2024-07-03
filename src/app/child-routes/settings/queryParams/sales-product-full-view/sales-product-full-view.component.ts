import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sales-product-full-view',
  templateUrl: './sales-product-full-view.component.html',
  styleUrls: ['./sales-product-full-view.component.scss'],
})
export class SalesProductFullViewComponent  implements OnInit {
  productId: number;

  constructor(public ac:ActivatedRoute) { 
   this.productId = Number(this.ac.snapshot.queryParamMap.get('id'));
  
  }

  ngOnInit() {}

}
