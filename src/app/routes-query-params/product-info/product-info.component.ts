import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {
  productList: any = [];
  uniqueData: any;
  apiData: any;
  constructor(public route: Router, public ac: ActivatedRoute) {

    // api data feching assigning to one variable
    this.apiData = [
      {
        id: 1,
        name: 'microwave oven',
        price: 25000,
        description: 'microwave oven with updated features and functionality',
        category: 'kitchen'
      },
      {
        id: 2,
        name: 'black jeans',
        price: 2500,
        description: 'one of the best quality jeans',
        category: 'clothes'
      },
      {
        id: 3,
        name: 'sneakers',
        price: 3000,
        description: 'sneakers with latest design',
        category: 'shoes'
      },
      {
        id: 4,
        name: 'fridge',
        price: 55000,
        description: 'fridge oven with updated features and functionality',
        category: 'kitchen'
      },
      {
        id: 5,
        name: 'white shirt',
        price: 1800,
        description: 'high quality shirt',
        category: 'clothes'
      },
      {
        id: 6,
        name: 'washing machine',
        price: 35000,
        description: 'washing machine oven with updated features and functionality',
        category: 'electronics'
      },
      {
        id: 7,
        name: 'hair drier',
        price: 2500,
        description: 'drier oven with updated features and functionality',
        category: 'electronics'
      },
      {
        id: 8,
        name: 'running shoes',
        price: 2500,
        description: 'shoes oven with updated features and functionality',
        category: 'shoes'
      },
      {
        id: 9,
        name: 'jacket',
        price: 3000,
        description: 'microwave oven with updated features and functionality',
        category: 'clothes'
      },
      {
        id: 10,
        name: 'iphone 12',
        price: 65000,
        description: 'mobile oven with updated features and functionality',
        category: 'electronics'
      },
      {
        id: 11,
        name: 'trousers',
        price: 2200,
        description: 'trousers oven with updated features and functionality',
        category: 'clothes'
      },
      {
        id: 12,
        name: 'juicer',
        price: 4000,
        description: 'juicer oven with updated features and functionality',
        category: 'kitchen'
      },
      {
        id: 13,
        name: 'camera',
        price: 45000,
        description: 'camera oven with updated features and functionality',
        category: 'electronics'
      },
      {
        id: 14,
        name: 'spectcles',
        price: 1400,
        description: 'spectacles oven with updated features and functionality',
        category: 'clothes'
      }
    ];

    this.productList = [...this.apiData]

    const seen = new Set();
    this.uniqueData = this.productList.filter((obj: any) => {
      return seen.has(obj.category) ? false : seen.add(obj.category);
    });

    // this.ac.queryParamMap.subscribe((ele: any) => {
      // const activeCategory = ele.get('category');
      this.ac.queryParams.subscribe((ele: any) => {
        console.log(ele , '====================');
        const activeCategory = ele['category'];
      if (activeCategory) {
        const filterByCategory = this.productList.filter((ele: any) => {
          return ele.category === activeCategory
        })
        this.productList = filterByCategory
      }
    })
  }

  ngOnInit() {
  }
  selectedCate(event: any) {
    this.productList = [...this.apiData]
    const abc = event.target.value
    this.route.navigate(['productInfo-filter'], { queryParams: { category: abc } })
  }

}