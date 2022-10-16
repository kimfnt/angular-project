import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-order-box',
  templateUrl: './order-box.component.html',
  styleUrls: ['./order-box.component.css']
})
export class OrderBoxComponent implements OnInit {

  @Input() order?: Order;

  constructor() { }

  ngOnInit(): void {
  }

}
