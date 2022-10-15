import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderUrl = "assets/orders.json";

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order> {
    return this.http.get<Order>(this.orderUrl);
  }
}
