import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  somethingEnter: any;
  sendDataToParent: any;
  constructor() { }

  ngOnInit() { }
  sendDataTochildC() {
    this.sendDataToParent = this.somethingEnter;
    console.log(this.sendDataToParent , 'this.sendDataToParent')
  }
}
