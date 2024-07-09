import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent  implements OnInit {
@Input() parentData :any;
  constructor() { }

  ngOnInit() {
    console.log(this.parentData , '+++++++++++++++++++++++++++++')
  }

}
