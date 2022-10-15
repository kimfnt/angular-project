import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {

  @Input() product?: Product;

  constructor() { }

  ngOnInit(): void {
  }

  // closeDetailView():void {
  //   this.product=undefined;
  // }

}
